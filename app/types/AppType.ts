import { Priority } from "../Components/Windows/TasksWindow";
import { Project, Task } from "../Data/AllProjects";

export type SidebarMenuItem = {
  id: number;
  name: string;
  isSelected: boolean;
};

export interface IconData {
  id: number;
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
}

export type SortingOption = {
  category: string;
  options: {
    label: string;
    value: string;
    selected: boolean;
  }[];
};

export type SortingDropDownPosition = {
  left: number;
  top: number;
  width?: number;
};

export type TabOption = {
  id: number;
  name: string;
  isSelected: boolean;
};

export type AppType = {
  selectedTaskObject: {
    selectedTask: Task | null;
    setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  };
  allTasksObject: {
    allTasks: Task[];
    setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  };
  projectsDropDownPositionsObject: {
    projectsDropDownPositions: SortingDropDownPosition;
    setProjectsDropDownPositions: React.Dispatch<
      React.SetStateAction<SortingDropDownPosition>
    >;
  };
  openProjectsDropDownObject: {
    openProjectsDropDown: boolean;
    setOpenProjectsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  };
  sortingDropDownPositionsObject: {
    sortingDropDownPositions: SortingDropDownPosition;
    setSortingDropDownPositions: React.Dispatch<
      React.SetStateAction<SortingDropDownPosition>
    >;
  };

  tabsOptionsObject: {
    tabsOptions: TabOption[];
    setTabsOptions: React.Dispatch<React.SetStateAction<TabOption[]>>;
  };

  openSortingDropDownObject: {
    openSortingDropDown: boolean;
    setOpenSortingDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  };
  sortingOptionProjectObject: {
    sortingOptionsProject: SortingOption[];
    setSortingOptionsProject: React.Dispatch<
      React.SetStateAction<SortingOption[]>
    >;
  };

  sortingOptionTaskObject: {
    sortingOptionsTask: SortingOption[];
    setSortingOptionsTask: React.Dispatch<
      React.SetStateAction<SortingOption[]>
    >;
  };

  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };

  sideBarMenuObject: {
    sideBarMenu: SidebarMenuItem[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SidebarMenuItem[]>>;
  };

  openProjectWindowObject: {
    openProjectWindow: boolean;
    setOpenProjectWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  allIconsDataObject: {
    allIconsData: IconData[];
    setAllIconsData: React.Dispatch<React.SetStateAction<IconData[]>>;
  };

  openIconWindowObject: {
    openIconWindow: boolean;
    setOpenIconWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  selectedIconObject: {
    selectedIcon: IconData | null;
    setSelectedIcon: React.Dispatch<React.SetStateAction<IconData | null>>;
  };

  allProjectsObject: {
    allProjects: Project[];
    setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  };

  openDropDownObject: {
    openDropDown: boolean;
    setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  };

  dropDownPositionsObject: {
    dropDownPositions: { left: number; top: number };
    setDropDownPositions: React.Dispatch<
      React.SetStateAction<{ left: number; top: number }>
    >;
  };

  selectedProjectObject: {
    selectedProject: Project | null;
    setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
  };

  openConfirmationWindowObject: {
    openConfirmationWindow: boolean;
    setOpenConfirmationWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  chosenProjectObject: {
    chosenProject: Project | null;
    setChosenProject: React.Dispatch<React.SetStateAction<Project | null>>;
  };
  openTasksWindowObject: {
    openTasksWindow: boolean;
    setOpenTasksWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  projectClickedObject: {
    projectClicked: Project | null;
    setProjectClicked: React.Dispatch<React.SetStateAction<Project | null>>;
  };

  isLoadingObject: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };

  projectSearch: string;
  taskSearch: string;
  setProjectSearch: React.Dispatch<React.SetStateAction<string>>;
  setTaskSearch: React.Dispatch<React.SetStateAction<string>>;
};
