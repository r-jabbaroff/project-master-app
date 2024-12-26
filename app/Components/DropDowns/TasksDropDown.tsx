import { useContextApp } from "@/app/contextApp";
import { Project } from "@/app/Data/AllProjects";
import { useEffect, useRef, useState } from "react";
import {
  ProjectWithSelection,
  SelectionOption,
  useTaskFormContext,
} from "../Windows/TasksWindow";
import CircleIcon from "@mui/icons-material/Circle";
import { getIconComponent } from "@/app/functions/IconsActions";
import { Priority } from "../Windows/TasksWindow";
import ProjectsListComponent from "./TasksDropDown/ProjectsListComponent";
import PriorityListComponent from "./TasksDropDown/PriorityListComponent";

export default function TasksDropDown() {
  //Variables
  const {
    clickedSelection,
    openTasksDropDown,
    setOpenTasksDropDown,
    tasksDropDownPositions,
  } = useTaskFormContext();
  const menuRef = useRef<HTMLDivElement>(null);
  //
  const dropDownToggle = openTasksDropDown ? "block" : "hidden";

  //Handle click outside to close the drop down
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Close the drop down menu if the user clicks outside of it
        setOpenTasksDropDown(false);
      }
    }

    function handleResize() {
      // Close the drop down menu when the window is resized
      setOpenTasksDropDown(false);
    }

    if (openTasksDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      // Restore scrolling
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);

      // Restore scrolling on cleanup
    };
  }, [openTasksDropDown, setOpenTasksDropDown]);

  //This code below, is to set the left and the right position
  //of the drop down
  let updatedLeftPos = 0;
  let updatedRightPos = 0;
  let updateBottomPos = 0;

  if (clickedSelection) {
    if (clickedSelection === "priority") {
      updatedRightPos = 0;
      updatedLeftPos = 0;
    } else {
      updatedRightPos = 0;
      updatedLeftPos = 0;
    }
  }

  //Jsx
  return (
    <div
      ref={menuRef}
      style={{
        left: clickedSelection === "priority" ? updatedLeftPos : "auto",
        right: clickedSelection === "priority" ? "auto" : updatedRightPos,
        top: 80,
        width: tasksDropDownPositions.width,
      }}
      className={` ${dropDownToggle} bg-white absolute p-3  z-[90] border  
  border-slate-50 select-none shadow-md rounded-lg flex flex-col gap-2   `}
    >
      {clickedSelection === "priority" ? (
        <PriorityListComponent />
      ) : (
        <ProjectsListComponent />
      )}
    </div>
  );
}
