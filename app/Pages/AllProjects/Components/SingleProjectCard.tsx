import React, { useRef } from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import { Project } from "@/app/Data/AllProjects";
import { getIconComponent } from "@/app/functions/IconsActions";
import { LibraryAdd } from "@mui/icons-material";
import { useContextApp } from "@/app/contextApp";
import AllProjects from "../AllProjects";

function SingleProjectCard({ project }: { project: Project }) {
  const daysLeft = calculateDaysLeft(project.createdAt);
  const progressPercentage = calculateProgressPercentage(
    project.tasks.length,
    project.tasks.filter((task) => task.status === "Completed").length
  );

  return (
    <li className=" w-[360px] max-md:w-[96%] h-[336px] justify-between    flex flex-col gap-8  rounded-lg p-7  bg-white">
      <ProjectCardHeader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </li>
  );

  function ProjectCardHeader() {
    const threeDotsRef = useRef<HTMLDivElement>(null);
    const {
      dropDownPositionsObject: { setDropDownPositions },
      openDropDownObject: { setOpenDropDown },
      selectedProjectObject: { setSelectedProject },
      chosenProjectObject: { setChosenProject },
      sideBarMenuObject: { setSideBarMenu },
    } = useContextApp();

    function openDropDown(event: React.MouseEvent) {
      event.preventDefault();
      event.stopPropagation();

      if (threeDotsRef.current) {
        const rect = threeDotsRef.current.getBoundingClientRect();
        const { top, left } = rect;
        setDropDownPositions({
          top: top + window.scrollY + 30, // Add window.scrollY to handle any current scroll position
          left: left + window.scrollX,
        });

        setOpenDropDown(true);
        // select the project we clicked on
        setSelectedProject(project);
      }
    }

    function showAllTasksOfProject() {
      //Update the chosen project variable
      setChosenProject(project);

      // Go to the all tasks page by using the side menu items
      setSideBarMenu((prevState) =>
        prevState.map((item) => ({
          ...item,
          isSelected: item.id === 2 ? true : false,
        }))
      );
    }

    return (
      <div className="flex  justify-between items-center mb-1">
        {/* Title and Icon */}
        <div className="flex gap-3 items-center ">
          {/* Project Icon */}
          <div className="bg-orange-600 flex justify-center items-center w-[38px] h-[38px] rounded-md">
            {getIconComponent(project.icon, "text-white", "23px")}
          </div>
          {/* Project Title */}
          <div className="flex  flex-col">
            <span
              onClick={showAllTasksOfProject}
              className="font-semibold text-[19px] hover:text-orange-600 cursor-pointer"
            >
              {truncateString(project.title, 35)}
            </span>
            <span className="text-slate-400 text-[13px]">
              {daysLeft === 0
                ? "Today"
                : daysLeft + ` day${daysLeft > 1 ? "s" : ""} ago`}
            </span>
          </div>
          {/* Progress Bar */}
        </div>

        {/* More Options */}

        <div
          ref={threeDotsRef}
          onClick={openDropDown}
          className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-slate-100"
        >
          <MoreVertIcon
            sx={{ fontSize: "14px" }}
            className="text-slate-400 text-[17px] cursor-pointer"
          />
        </div>
      </div>
    );
  }

  function ProjectCardBody() {
    const {
      openTasksWindowObject: { setOpenTasksWindow },
      projectClickedObject: { setProjectClicked },
      allProjectsObject: { setAllProjects, allProjects },
    } = useContextApp();
    function openTheTaskWindow() {
      setOpenTasksWindow(true);
      //get the project where we want add the task
      const findProject = allProjects.find(
        (proj) => proj.title.toLowerCase() === project.title.toLowerCase()
      );

      if (findProject) {
        setProjectClicked(findProject);
      }
    }
    return (
      <div className="h-[80px] flex flex-col gap-3 mb-1">
        {project.tasks.length === 0 && (
          <div className="flex justify-center flex-col gap-3 mt-[15px] items-center  h-full  ">
            <LibraryAdd
              onClick={openTheTaskWindow}
              className="text-slate-400 opacity-40 text-[26px] cursor-pointer hover:opacity-100
            hover:text-orange-600"
            />
            <span className="text-slate-400 opacity-45 text-[13px]">
              No tasks created yet...
            </span>
          </div>
        )}
        <ul className="text-slate-400     text-[13px] flex flex-col gap-2 ml-3">
          {project.tasks.slice(0, 3).map((task) => (
            <li key={task.id} className="flex gap-2 items-center">
              <div>
                <CircleIcon sx={{ fontSize: "8px" }} />
              </div>

              <span>{truncateString(task.title, 40)}</span>
            </li>
          ))}
        </ul>

        <div className="text-[11px]  text-slate-400">
          {project.tasks.length > 3 && (
            <span className="text-orange-600">
              +{project.tasks.length - 3} tasks
            </span>
          )}
        </div>
      </div>
    );
  }

  function ProjectCardFooter() {
    return (
      <div className="flex gap-4 flex-col mt-3 ">
        <div className="text-[12px] gap-3  items-center flex w-full">
          <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
            <div
              style={{ width: `${progressPercentage}%` }}
              className={`  bg-orange-600 h-full rounded-r-xl`}
            ></div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-[13px] text-slate-400">On Progress</p>
          <div className="flex gap-1 text-[13px] text-slate-400">
            {/* <ListIcon /> */}
            <p>{progressPercentage}%</p>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleProjectCard;

function truncateString(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

function calculateDaysLeft(creationDate: string): number {
  const creation = new Date(creationDate);
  const now = new Date();
  const differenceInTime = now.getTime() - creation.getTime();
  return Math.floor(differenceInTime / (1000 * 3600 * 24));
}

function calculateProgressPercentage(
  totalTasks: number,
  completedTasks: number
): number {
  return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
}
