import React, { useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useContextApp } from "@/app/contextApp";

interface ProjectsHeaderProps {
  globalSearchProject: string;
  onChange: (value: string) => void;
}

function ProjectsHeader({
  globalSearchProject,
  onChange,
}: ProjectsHeaderProps) {
  return (
    <div className="flex justify-between">
      <SearchBar
        globalSearchProject={globalSearchProject}
        onChange={onChange}
      />
      <AddProjectButton />
    </div>
  );
}

interface SearchBarProps {
  globalSearchProject: string;
  onChange: (value: string) => void;
}

function SearchBar({ globalSearchProject, onChange }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

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
    <div className="flex items-center">
      <div className="border-b-2 border-orange-600 h-[39px] w-11 flex justify-center items-center">
        <SearchIcon
          className="text-slate-400 outline-none"
          sx={{ fontSize: "26px" }}
        />
      </div>
      <div className="border-b-2 w-[67%] border-slate-200">
        <input
          ref={inputRef}
          value={globalSearchProject}
          onChange={handleInputChange}
          type="text"
          placeholder="Search a project..."
          className="p-2 bg-transparent text-[14px] outline-none w-full"
        />
      </div>
    </div>
  );
}

function AddProjectButton() {
  const {
    openSideBarObject: { setOpenSideBar, openSideBar },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useContextApp();

  function handleClickedAddProjectBtn() {
    setOpenProjectWindow(true);
  }

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={handleClickedAddProjectBtn}
        className="bg-orange-600 text-white px-2 text-[14px] rounded-md flex gap-1 items-center p-2 pr-3 max-sm:pr-2"
      >
        <AddIcon sx={{ fontSize: "22px" }} className="mt-[2px]" />
        <span className="max-sm:hidden">New Project</span>
      </button>
      <div className="max-[940px]:block hidden">
        <MenuIcon
          onClick={() => setOpenSideBar(!openSideBar)}
          className="text-slate-400 h-9 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
