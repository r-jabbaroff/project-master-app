"use client";
import { useContextApp } from "@/app/contextApp";
import { Project, Task } from "@/app/Data/AllProjects";
import { sortProjects } from "@/app/functions/sortingFunctions";
import AllProjects from "@/app/Pages/AllProjects/AllProjects";
import { SortingOption } from "@/app/types/AppType";
import { Category } from "@mui/icons-material";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";

function SortingDropDown() {
  const {
    sortingOptionProjectObject: {
      sortingOptionsProject,
      setSortingOptionsProject,
    },

    sortingOptionTaskObject: { sortingOptionsTask, setSortingOptionsTask },
    openSortingDropDownObject: { openSortingDropDown, setOpenSortingDropDown },
    sortingDropDownPositionsObject: { sortingDropDownPositions },
    allProjectsObject: { allProjects, setAllProjects },
    sideBarMenuObject: { sideBarMenu },
    allTasksObject: { allTasks, setAllTasks },
  } = useContextApp();

  const dropDownRef = useRef<HTMLDivElement>(null);

  const sortingOptionArray = sideBarMenu[0].isSelected
    ? sortingOptionsProject
    : sortingOptionsTask;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        // Close the drop down menu if the user clicks outside of it
        setOpenSortingDropDown(false);
      }
    }

    function handleResize() {
      // Close the drop down menu when the window is resized
      setOpenSortingDropDown(false);
    }

    if (openSortingDropDown) {
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
  }, [openSortingDropDown, setOpenSortingDropDown]);

  //
  //----------------------------------------------------------------

  useEffect(() => {
    const currentSortingOption = sortingOptionsProject
      .flatMap((category) => category.options)
      .find((option) => option.selected);
    const selectedOption = currentSortingOption;

    const sortedProjects = sortProjects(allProjects, selectedOption?.value);

    if (JSON.stringify(sortedProjects) !== JSON.stringify(allProjects)) {
      setAllProjects(sortedProjects);
    }
  }, [allProjects]);

  function handleOptionSelected(categoryIndex: number, optionIndex: number) {
    //Update the selection in the sorting options array
    const updateSortingOptions = sortingOptionArray.map((category, cIndex) => ({
      ...category,
      options: category.options.map((option, oIndex) => ({
        ...option,
        selected: cIndex === categoryIndex && oIndex === optionIndex,
      })),
    }));

    // get the option object that has the isSelected property as true
    const selectedOption = updateSortingOptions
      .flatMap((option) => option.options)
      .find((option) => option.selected);

    //If, the use is in the all projects page, sort the project, and if
    //in the all tasks page, sort the the all tasks array

    if (sideBarMenu[0].isSelected) {
      const allSortedProjects = sortProjects(
        allProjects,
        selectedOption?.value
      );
      setAllProjects(allSortedProjects);
      //If we are in the all projects page, we are going to update the sorting options project
      setSortingOptionsProject(updateSortingOptions);
      //If the tasks page is already selected, then execute the sorting of all tasks
    } else if (sideBarMenu[1].isSelected) {
      const sortedTasks = sortAllTasks(allTasks, selectedOption?.value);
      setAllTasks(sortedTasks);
      //If we are in the all tasks page, we are going to update the sorting options tasks
      setSortingOptionsTask(updateSortingOptions);
    }

    setOpenSortingDropDown(false);
  }

  //Trigger the sorting whenever the allTasks is updated
  useEffect(() => {
    //Get the option value
    const currentSortingOption = sortingOptionsTask
      .flatMap((category) => category.options)
      .find((option) => option.selected);
    //
    const selectedOption = currentSortingOption;

    const sortedTasks = sortAllTasks(allTasks, selectedOption?.value);
    if (JSON.stringify(sortedTasks) !== JSON.stringify(allTasks)) {
      setAllTasks(sortedTasks);
    }
  }, [allTasks]);

  function sortAllTasks(
    allTasks: Task[],
    SelectionOptionValue: string | undefined
  ) {
    const sortedTasks = [...allTasks]; // Copy of allTasks to avoid mutation

    switch (SelectionOptionValue) {
      case "asc":
        sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "desc":
        sortedTasks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
        sortedTasks.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "oldest":
        sortedTasks.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      default:
        // If no valid sort option is provided, return the original array
        return allTasks;
    }

    return sortedTasks;
  }

  return (
    <div
      ref={dropDownRef}
      style={{
        top: `${sortingDropDownPositions.top}px`,
        left: `${sortingDropDownPositions.left}px`,
        width: `${sortingDropDownPositions.width}px`,
      }}
      className={`bg-white text-sm top-[226px] right-60 z-[60] px-5
      border-slate-50  fixed py-6 w-[160px] select-none shadow-md rounded-lg 
      flex flex-col ${openSortingDropDown ? "block" : "hidden"} `}
    >
      {/* each category */}
      {sortingOptionArray.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="flex flex-col gap-1  text-slate-700 cursor-pointer"
        >
          <span
            className={`text-[13px] font-bold ${
              category.category === "Date" ? "mt-5" : ""
            }`}
          >
            {category.category}
          </span>
          {/* each option */}
          <div className="flex flex-col gap-2 ml-2 mt-[5px]">
            {category.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <span
                  onClick={() =>
                    handleOptionSelected(categoryIndex, optionIndex)
                  }
                  className={`${
                    option.selected ? "text-orange-600" : " text-slate-500"
                  } cursor-pointer hover:text-orange-600`}
                >
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SortingDropDown;
