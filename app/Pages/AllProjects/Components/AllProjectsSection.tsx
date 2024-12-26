import React, { SetStateAction } from "react";
import SingleProjectCard from "./SingleProjectCard";
import { useContextApp } from "@/app/contextApp";
import { ProjectsEmptyScreen } from "@/app/EmptyScreens/ProjectsEmptyScreen";
import CircularProgress from "@mui/material/CircularProgress";
import SearchOffIcon from "@mui/icons-material/SearchOff";

function AllProjectsSection({
  globalSearchProject,
  setGlobalSearchProject,
}: {
  globalSearchProject: string;
  setGlobalSearchProject: React.Dispatch<SetStateAction<string>>;
}) {
  const {
    allProjectsObject: { allProjects },
    isLoadingObject: { isLoading },
  } = useContextApp();

  console.log(globalSearchProject);

  const filterProjectsBySearch = allProjects.filter((proj) =>
    proj.title.toLowerCase().includes(globalSearchProject.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3   py-40 justify-center items-center w-full  mt-16">
        <CircularProgress value={100} className="text-orange-600" />
        <span className="text-slate-400 text-sm">Loading...</span>
      </div>
    );
  } else {
    if (allProjects.length === 0) {
      return (
        <div className="flex justify-center items-center">
          <ProjectsEmptyScreen />
        </div>
      );
    }
  }

  if (filterProjectsBySearch.length === 0) {
    return (
      <div className="mt-28">
        <NoItemsFound />
      </div>
    );
  } else {
    return (
      <ul className="flex gap-4 flex-wrap mt-6 max-sm:grid max-sm:grid-cols-1">
        {filterProjectsBySearch.map((project) => (
          <SingleProjectCard key={project.id} project={project} />
        ))}
      </ul>
    );
  }
}

export default AllProjectsSection;

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
