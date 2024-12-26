import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";

import CircleIcon from "@mui/icons-material/Circle";
import ListIcon from "@mui/icons-material/List";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Checkbox from "@mui/material/Checkbox";
import CachedIcon from "@mui/icons-material/Cached";
import { useContextApp } from "@/app/contextApp";
import { Project, Task } from "@/app/Data/AllProjects";
import { TabOption } from "@/app/types/AppType";
import { getIconComponent } from "@/app/functions/IconsActions";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import {
  ConfettiScreen,
  NoTasksDoneYetScreen,
  TasksEmptyScreen,
} from "@/app/EmptyScreens/ProjectsEmptyScreen";
import { updateStatus } from "@/app/functions/tasksFunction";

const TasksList = () => {
  const {
    chosenProjectObject: { chosenProject },
    allProjectsObject: { allProjects },
    tabsOptionsObject: { tabsOptions },
    allTasksObject: { allTasks, setAllTasks },
    taskSearch,
  } = useContextApp();

  // Filter tasks based on chosen project and status
  const filteredTasks = useMemo(() => {
    let tasks = allTasks;

    // Filter by project
    if (chosenProject) {
      tasks = tasks.filter((task) => task.projectName === chosenProject.title);
    }

    // Filter by status if "Completed" tab is selected
    if (tabsOptions[1].isSelected) {
      tasks = tasks.filter((task) => task.status === "Completed");
    } else {
      tasks = tasks.filter((task) => task.status === "In Progress");
    }

    return tasks;
  }, [chosenProject, tabsOptions, allProjects, allTasks]);

  const filterTasksBySearch = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(taskSearch.toLowerCase())
  );

  if (chosenProject?.tasks.length === 0) {
    return <TasksEmptyScreen />;
  }

  return (
    <div className="ml-12 max-sm:ml-0  mt-11 flex-col flex gap-4">
      <Tabs />

      {tabsOptions[0].isSelected && filteredTasks.length === 0 && (
        <ConfettiScreen />
      )}

      {tabsOptions[1].isSelected && filteredTasks.length === 0 && (
        <NoTasksDoneYetScreen />
      )}

      <div className="flex flex-col    w-full   overflow-auto gap-4 ">
        {filterTasksBySearch.map((singleTask, index) => (
          <SingleTask key={index} task={singleTask} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;

function Tabs() {
  const {
    chosenProjectObject: { chosenProject },
    allProjectsObject: { allProjects },
    tabsOptionsObject: { tabsOptions, setTabsOptions },
  } = useContextApp();

  function countOnGoingTasks() {
    //If chosen project is not null, count the tasks are in progress by using the
    //reduce method based on its status
    if (chosenProject) {
      return chosenProject.tasks.reduce((accTask, task) => {
        return accTask + (task.status === "In Progress" ? 1 : 0);
      }, 0);
    }

    //otherwise count the total of all tasks in the all Projects
    return allProjects.reduce((accProjects, project) => {
      return (
        accProjects +
        project.tasks.reduce((accTasks, task) => {
          return accTasks + (task.status === "In Progress" ? 1 : 0);
        }, 0)
      );
    }, 0);
  }

  function completedTasks() {
    //If chosen project is selected, calculate the difference between the on going tasks
    // and the total of all tasks in this project
    if (chosenProject) {
      return chosenProject.tasks.length - countOnGoingTasks();
    }

    //The same for all projects, but first we need to count all the tasks
    //in all projects, that's why I'm using reduce function
    const totalTasksInAllProjects = allProjects.reduce((acc, project) => {
      return acc + project.tasks.length;
    }, 0);

    //if the chosen project is still null, return the completed tasks of all projects
    return totalTasksInAllProjects - countOnGoingTasks();
  }

  function switchTabs(index: number) {
    setTabsOptions((prevState) =>
      prevState.map((tab, i) => ({
        ...tab,
        isSelected: index === i,
      }))
    );
  }

  return (
    <div className="flex items-center gap-6 ml-3 mt-8 mb-5">
      {tabsOptions.map((singleTabOption, index) => (
        <div
          key={index}
          onClick={() => switchTabs(index)}
          className={` flex gap-2 cursor-pointer ${
            singleTabOption.isSelected
              ? "text-orange-600 font-semibold"
              : "text-slate-300"
          } `}
        >
          <span>{singleTabOption.name}</span>
          <span
            className={`${
              singleTabOption.isSelected ? "bg-orange-600 " : "bg-slate-300"
            } text-white px-2 rounded-md max-[420px]:hidden`}
          >
            {singleTabOption.id === 1 ? countOnGoingTasks() : completedTasks()}
          </span>
        </div>
      ))}
    </div>
  );
}

function SingleTask({ task }: { task: Task }) {
  const {
    selectedTaskObject: { setSelectedTask },
    openTasksWindowObject: { setOpenTasksWindow },
    openConfirmationWindowObject: { setOpenConfirmationWindow },
    allProjectsObject: { allProjects, setAllProjects },
    allTasksObject: { allTasks, setAllTasks },
    chosenProjectObject: { chosenProject, setChosenProject },
  } = useContextApp();
  const [checked, setChecked] = useState(false);
  const priorityColors = {
    Low: "text-green-500",
    Medium: "text-yellow-500",
    High: "text-red-500",
  };

  useLayoutEffect(() => {
    setChecked(task.status === "Completed");
  }, [task]);

  // function updateStatus() {
  //   const newStatus = checked ? "In Progress" : "Completed";

  //   // Update allProjects
  //   const updatedProjects: Project[] = allProjects.map((project) => ({
  //     ...project,
  //     tasks: project.tasks.map((t) =>
  //       t.id === task.id ? { ...t, status: newStatus } : t
  //     ),
  //   }));

  //   // Update allTasks
  //   const updatedTasks: Task[] = allTasks.map((t) =>
  //     t.id === task.id ? { ...t, status: newStatus } : t
  //   );

  //   if (chosenProject) {
  //     const updateChosenProject: Project = {
  //       ...chosenProject,
  //       tasks: chosenProject.tasks.map((t) => {
  //         if (task.id === t.id) {
  //           return { ...t, status: newStatus };
  //         }
  //         return t;
  //       }),
  //     };

  //     setChosenProject(updateChosenProject);
  //   }

  //   // Update state
  //   setAllProjects(updatedProjects);
  //   setAllTasks(updatedTasks);
  //   setChecked(!checked);
  // }

  function updateStatusFunction() {
    try {
      updateStatus({
        task,
        allProjects,
        allTasks,
        checked,
        chosenProject,
        setAllProjects,
        setAllTasks,
        setChecked,
        setChosenProject,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex gap-1 items-center">
      <Checkbox
        sx={{
          color: "orangered",
          "&.Mui-checked": {
            color: "orange",
          },
        }}
        onClick={updateStatusFunction}
        checked={checked}
      />
      <div
        className="w-full bg-white rounded-lg   border-slate-100   
  flex gap-3 items-center justify-between p-5 py-6 max-sm:p-4  "
      >
        <div className="flex gap-3 items-center  ">
          {/* Wallet Icon */}
          <div>
            <div
              className="  bg-orange-200 rounded-lg p-2 flex 
            items-center justify-center"
            >
              {getIconComponent(task.icon, "text-orange-600", "19px")}
            </div>
          </div>
          {/* Wallet Name */}
          <div
            onClick={() => {
              //Update the selected task with the target task
              setSelectedTask(task);
              //Open up the task window
              setOpenTasksWindow(true);
            }}
            className="flex flex-col"
          >
            <span className="font-bold hover:text-orange-600 cursor-pointer max-sm:text-sm">
              {task.title}
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-[2px]  ">
                {task.projectName}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-14 font-bold items-center    ">
          <div className="grid grid-cols-2 gap-14 max-[770px]:grid-cols-1 justify-center items-center  ">
            {/* Status */}
            <div className="flex gap-2 items-center  max-[770px]:hidden">
              <CachedIcon className="text-[24px] text-slate-400" />
              <span className="text-[14px] text-slate-400">{task.status}</span>
            </div>

            {/* Priority */}
            <div className="flex gap-1 items-center max-[940px]:hidden">
              <CircleIcon
                sx={{ fontSize: "10px" }}
                className={` ${priorityColors[task.priority]}`}
              />
              <span className="text-[14px] text-slate-400">
                {task.priority}
              </span>
            </div>
          </div>

          {/* Actions Buttons */}
          <div className="flex gap-2 items-center">
            {/* Edit Button */}
            <div
              onClick={() => {
                //Update the selected task with the target task
                setSelectedTask(task);
                //Open up the task window
                setOpenTasksWindow(true);
              }}
              className=" rounded-lg p-2  flex items-center justify-center 
              cursor-pointer bg-orange-200 hover:bg-orange-300 transition-all"
            >
              <EditOutlinedIcon
                sx={{ fontSize: "17px" }}
                className="text-orange-600"
              />
            </div>

            {/* Delete Button */}
            <div
              onClick={() => {
                setSelectedTask(task);
                setOpenConfirmationWindow(true);
              }}
              className=" rounded-lg p-2  flex items-center justify-center cursor-pointer
      bg-slate-200 hover:bg-slate-300"
            >
              <DeleteOutlineOutlinedIcon
                sx={{ fontSize: "17px" }}
                className="text-slate-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NoItemsFound() {
  return (
    <div
      className={`p-1 gap-5 flex text-slate-400 py-16 flex-col justify-center pt-[80px] pb-8 items-center relative`}
    >
      <div className=" flex flex-col items-center gap-1">
        <SearchOffIcon sx={{ fontSize: "100px" }} />
        <h3 className="  opacity-80 text-slate-600 text-[16px]   text-center">
          {`No Project Found`}
        </h3>
      </div>
    </div>
  );
}
