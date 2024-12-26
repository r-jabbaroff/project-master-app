"use client";
import React, { useCallback, useState } from "react";
import SideBar from "../Components/SideBar";

import AllTasksContainer from "../Pages/AllTasks/AllTasks";
import AllProjects from "../Pages/AllProjects/AllProjects";
import { useContextApp } from "../contextApp";
import { ProjectWindow } from "../Components/Windows/ProjectWindow";
import IconsWindow from "../Components/Windows/IconWindow";
import MoreDropDown from "../Components/DropDowns/MoreDropDown";
import ConfirmationWindow from "../Components/Windows/ConfirmationWindow";
import { Toaster } from "react-hot-toast";
import SortingDropDown from "../Components/DropDowns/SortingDropDown";
import ProjectsDropDown from "../Components/DropDowns/ProjectsDropDown";
import { TasksWindow } from "../Components/Windows/TasksWindow";
import TasksDropDown from "../Components/DropDowns/TasksDropDown";
import connect from "../lib/connect";

export default function Page() {
  const {
    openSideBarObject: { openSideBar },
    sideBarMenuObject: { sideBarMenu },
    openProjectWindowObject: { openProjectWindow },
    openConfirmationWindowObject: { openConfirmationWindow },
    openTasksWindowObject: { openTasksWindow },
  } = useContextApp();

  const componentMap: Record<number, React.ReactNode> = {
    1: <AllProjects />,
    2: <AllTasksContainer />,
  };

  const componentKey = sideBarMenu.findIndex((item) => item.isSelected);

  const selectedComponent = componentMap[componentKey + 1] || null;

  return (
    <div className=" flex w-full h-screen poppins ">
      <TasksDropDown />
      <TasksWindow />
      <ProjectsDropDown />
      <SortingDropDown />
      <Toaster />
      <ConfirmationWindow />
      <MoreDropDown />
      <IconsWindow />
      <ProjectWindow />
      {/* Soft Layer */}
      {(openSideBar ||
        openProjectWindow ||
        openConfirmationWindow ||
        openTasksWindow) && (
        <div
          className={`w-full h-full ${
            openProjectWindow || openConfirmationWindow || openTasksWindow
              ? "z-[70]"
              : " z-50"
          }  bg-slate-800 fixed opacity-30`}
        ></div>
      )}

      {/* Sidebar */}
      <SideBar />
      {/* Selected Component */}
      {selectedComponent && selectedComponent}
    </div>
  );
}
