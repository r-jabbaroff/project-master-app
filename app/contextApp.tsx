"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AppType, IconData, SidebarMenuItem, TabOption } from "./types/AppType";
import { allIconsArray } from "./Data/AllIcons";
import { Project, projectsData, Task } from "./Data/AllProjects";
import CircleIcon from "@mui/icons-material/Circle";
import { Priority } from "./Components/Windows/TasksWindow";
import { useUser } from "@clerk/nextjs";
//Setting the structure of the context

//Setting the default state
const defaultState: AppType = {
  openSideBarObject: { openSideBar: false, setOpenSideBar: () => {} },
  sideBarMenuObject: { sideBarMenu: [], setSideBarMenu: () => {} },
  openProjectWindowObject: {
    openProjectWindow: false,
    setOpenProjectWindow: () => {},
  },

  allIconsDataObject: { allIconsData: [], setAllIconsData: () => {} },
  openIconWindowObject: { openIconWindow: false, setOpenIconWindow: () => {} },
  selectedIconObject: { selectedIcon: null, setSelectedIcon: () => {} },
  allProjectsObject: { allProjects: [], setAllProjects: () => {} },
  openDropDownObject: { openDropDown: false, setOpenDropDown: () => {} },
  dropDownPositionsObject: {
    dropDownPositions: { left: 0, top: 0 },
    setDropDownPositions: () => {},
  },
  selectedProjectObject: {
    selectedProject: null,
    setSelectedProject: () => {},
  },

  openConfirmationWindowObject: {
    openConfirmationWindow: false,
    setOpenConfirmationWindow: () => {},
  },

  sortingOptionProjectObject: {
    sortingOptionsProject: [],
    setSortingOptionsProject: () => {},
  },

  sortingOptionTaskObject: {
    sortingOptionsTask: [],
    setSortingOptionsTask: () => {},
  },
  openSortingDropDownObject: {
    openSortingDropDown: false,
    setOpenSortingDropDown: () => {},
  },

  sortingDropDownPositionsObject: {
    sortingDropDownPositions: { left: 0, top: 0 },
    setSortingDropDownPositions: () => {},
  },

  chosenProjectObject: { chosenProject: null, setChosenProject: () => {} },
  tabsOptionsObject: { tabsOptions: [], setTabsOptions: () => {} },
  openProjectsDropDownObject: {
    openProjectsDropDown: false,
    setOpenProjectsDropDown: () => {},
  },

  projectsDropDownPositionsObject: {
    projectsDropDownPositions: { left: 0, top: 0 },
    setProjectsDropDownPositions: () => {},
  },
  openTasksWindowObject: {
    openTasksWindow: false,
    setOpenTasksWindow: () => {},
  },

  allTasksObject: {
    allTasks: [],
    setAllTasks: () => {},
  },

  selectedTaskObject: {
    selectedTask: null,
    setSelectedTask: () => {},
  },
  projectClickedObject: {
    projectClicked: null,
    setProjectClicked: () => {},
  },

  isLoadingObject: {
    isLoading: false,
    setIsLoading: () => {},
  },

  projectSearch: "",
  setProjectSearch: () => {},

  taskSearch: "",
  setTaskSearch: () => {},
};

//Creating the context
const ContextApp = createContext<AppType>(defaultState);

//Creating the provider
export default function ContextAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState<SidebarMenuItem[]>([
    {
      id: 1,
      name: "All Projects",
      isSelected: true,
    },
    {
      id: 2,
      name: "All Tasks",
      isSelected: false,
    },
    {
      id: 3,
      name: "Logout",
      isSelected: false,
    },
  ]);

  const [openProjectWindow, setOpenProjectWindow] = useState(false);
  const [allIconsData, setAllIconsData] = useState<IconData[]>(allIconsArray);
  const [openIconWindow, setOpenIconWindow] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [dropDownPositions, setDropDownPositions] = useState({
    top: 0,
    left: 0,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openConfirmationWindow, setOpenConfirmationWindow] =
    useState<boolean>(false);

  const [sortingOptionsProject, setSortingOptionsProject] = useState([
    {
      category: "Order",
      options: [
        { label: "A-Z", value: "asc", selected: true },
        { label: "Z-A", value: "desc", selected: false },
      ],
    },
    {
      category: "Date",
      options: [
        { label: "Newest", value: "newest", selected: false },
        { label: "Oldest", value: "oldest", selected: false },
      ],
    },
  ]);

  const [sortingOptionsTask, setSortingOptionsTask] = useState([
    {
      category: "Order",
      options: [
        { label: "A-Z", value: "asc", selected: true },
        { label: "Z-A", value: "desc", selected: false },
      ],
    },
    {
      category: "Date",
      options: [
        { label: "Newest", value: "newest", selected: false },
        { label: "Oldest", value: "oldest", selected: false },
      ],
    },
  ]);

  const [openSortingDropDown, setOpenSortingDropDown] = useState(false);
  const [sortingDropDownPositions, setSortingDropDownPositions] = useState({
    top: 0,
    left: 0,
  });

  const [chosenProject, setChosenProject] = useState<Project | null>(null);
  const [tabsOptions, setTabsOptions] = useState<TabOption[]>([
    { id: 1, name: "On Going Tasks", isSelected: true },
    { id: 2, name: "Completed Tasks", isSelected: false },
  ]);

  const [openProjectsDropDown, setOpenProjectsDropDown] = useState(false);
  const [projectsDropDownPositions, setProjectsDropDownPositions] = useState({
    top: 0,
    left: 0,
  });

  const [openTasksWindow, setOpenTasksWindow] = useState(false);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [projectClicked, setProjectClicked] = useState<Project | null>(null);
  const { user, isLoaded, isSignedIn } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [projectSearch, setProjectSearch] = useState("");
  const [taskSearch, setTaskSearch] = useState("");

  //Update the window size
  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 940);
    }

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Simulate the fetching of the projects
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects data from the API
        const response = await fetch(`/api/projects?clerkUserId=${user?.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();

        // Extract all tasks from the fetched projects data
        const extractAllTasks = data.projects.flatMap(
          (project: any) => project.tasks
        );

        // Update the state with fetched data
        setAllTasks(extractAllTasks);
        setAllProjects(data.projects);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };

    if (isLoaded && isSignedIn) {
      setIsLoading(false);
      fetchData();
    }
  }, [user, isLoaded, isSignedIn]);

  //Close the side bar on mobile view is false
  useEffect(() => {
    if (!isMobileView) {
      setOpenSideBar(false);
    }
  }, [isMobileView]);

  //close the side bar when the side bar menu is clicked
  useEffect(() => {
    setOpenSideBar(false);
  }, [sideBarMenu]);

  return (
    <ContextApp.Provider
      value={{
        selectedTaskObject: { selectedTask, setSelectedTask },
        allTasksObject: { allTasks, setAllTasks },
        tabsOptionsObject: { tabsOptions, setTabsOptions },
        openSideBarObject: { openSideBar, setOpenSideBar },
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        openProjectWindowObject: {
          openProjectWindow,
          setOpenProjectWindow,
        },
        allIconsDataObject: { allIconsData, setAllIconsData },
        openIconWindowObject: { openIconWindow, setOpenIconWindow },
        selectedIconObject: { selectedIcon, setSelectedIcon },
        allProjectsObject: { allProjects, setAllProjects },
        dropDownPositionsObject: {
          dropDownPositions,
          setDropDownPositions,
        },
        openDropDownObject: { openDropDown, setOpenDropDown },
        selectedProjectObject: { selectedProject, setSelectedProject },
        openConfirmationWindowObject: {
          openConfirmationWindow,
          setOpenConfirmationWindow,
        },

        sortingOptionProjectObject: {
          sortingOptionsProject,
          setSortingOptionsProject,
        },

        sortingOptionTaskObject: {
          sortingOptionsTask,
          setSortingOptionsTask,
        },
        openSortingDropDownObject: {
          openSortingDropDown,
          setOpenSortingDropDown,
        },
        sortingDropDownPositionsObject: {
          sortingDropDownPositions,
          setSortingDropDownPositions,
        },

        chosenProjectObject: { chosenProject, setChosenProject },
        openProjectsDropDownObject: {
          openProjectsDropDown,
          setOpenProjectsDropDown,
        },

        projectsDropDownPositionsObject: {
          projectsDropDownPositions,
          setProjectsDropDownPositions,
        },
        openTasksWindowObject: { openTasksWindow, setOpenTasksWindow },
        projectClickedObject: { projectClicked, setProjectClicked },
        isLoadingObject: { isLoading, setIsLoading },
        taskSearch,
        setTaskSearch,
        projectSearch,
        setProjectSearch,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

//Creating the hook
export function useContextApp() {
  return useContext(ContextApp);
}
