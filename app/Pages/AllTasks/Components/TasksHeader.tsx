import React, { useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useContextApp } from "@/app/contextApp";

function TasksHeader() {
  return (
    <div className="  flex justify-between">
      <SearchBar />
      <AddTaskButton />
    </div>
  );

  function SearchBar() {
    const { taskSearch, setTaskSearch } = useContextApp();

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      // Restore focus to the input element after each render
      if (inputRef.current) {
        const len = inputRef.current.value.length;
        inputRef.current.focus();
        inputRef.current.setSelectionRange(len, len);
      }
    });

    return (
      <div className=" flex  items-center">
        <div className="border-b-2 border-orange-600 h-[39px] w-11 justify-center flex items-center">
          <SearchIcon
            className="text-slate-400 outline-none"
            sx={{ fontSize: "26px" }}
          />
        </div>

        <div className=" border-b-2 border-slate-200">
          <input
            ref={inputRef}
            value={taskSearch}
            onChange={(e) => setTaskSearch(e.target.value)}
            placeholder="Search a Task..."
            className={`p-2 bg-transparent text-[14px] outline-none`}
          />
        </div>
      </div>
    );
  }
  function AddTaskButton() {
    const {
      openSideBarObject: { setOpenSideBar, openSideBar },
      openTasksWindowObject: { openTasksWindow, setOpenTasksWindow },
      allProjectsObject: { allProjects },
    } = useContextApp();

    return (
      <div className="flex gap-3 items-center">
        <button
          disabled={allProjects.length === 0}
          style={{ opacity: `${allProjects.length === 0 && "50%"}` }}
          onClick={() => setOpenTasksWindow(!openTasksWindow)}
          className="bg-orange-600 text-white p-2   justify-center text-[14px] rounded-md flex gap-1 items-center"
        >
          <AddIcon sx={{ fontSize: "22px" }} className="mt-[2px]" />
          <span className="max-sm:hidden pr-2 ">New Task</span>
        </button>
        <div className="max-[940px]:block hidden">
          <MenuIcon
            onClick={() => setOpenSideBar(!openSideBar)}
            className="text-slate-400 h-9 cursor-pointer  "
          />
        </div>
      </div>
    );
  }
}

export default TasksHeader;
