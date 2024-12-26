"use client";
import { useState } from "react";
import AllProjectsSection from "./Components/AllProjectsSection";
import ProjectsHeader from "./Components/ProjectsHeader";
import ProjectsSubHeader from "./Components/ProjectsSubHeader";
import StatsRightSideBar from "./Components/StatsRightSideBar";

export default function AllProjects() {
  const [globalSearchProject, setGlobalSearchProject] = useState("");

  return (
    <div className="bg-slate-50 w-full flex-grow overflow-auto flex">
      <AllProjectsArea />
      <StatsRightSideBar />
    </div>
  );

  function updateSearchProject(value: string) {
    setGlobalSearchProject(value);
  }

  function AllProjectsArea() {
    return (
      <div className="w-[78%] max-lg:w-full p-10 max-sm:p-7 max-sm:pt-9 flex flex-col gap-3">
        <ProjectsHeader
          globalSearchProject={globalSearchProject}
          onChange={updateSearchProject}
        />
        <ProjectsSubHeader />
        <AllProjectsSection
          globalSearchProject={globalSearchProject}
          setGlobalSearchProject={setGlobalSearchProject}
        />
      </div>
    );
  }
}
