import { v4 as uuidv4 } from "uuid";

// Define the structure for a task
export type Task = {
  id: string;
  title: string;
  icon: string;
  projectName: string;
  status: "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  createdAt: string;
  updatedAt: string;
};

// Define the structure for a project
export type Project = {
  id: string;
  clerkUserId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  icon: string;

  tasks: Task[];
};

// Sample data with three tasks
export const projectsData: Project[] = [
  {
    id: uuidv4(),
    clerkUserId: "123",
    title: "AProject Title",
    createdAt: "2024-08-26T10:00:00Z",
    updatedAt: "2024-08-28T14:30:00Z",
    icon: "LocalLibrary",
    tasks: [
      {
        id: uuidv4(),
        title: "Create the UI Design of the task",
        icon: "Movie",
        projectName: "AProject Title",
        status: "Completed",
        priority: "Low",
        createdAt: "2024-08-26T10:00:00Z",
        updatedAt: "2024-08-28T14:30:00Z",
      },
      {
        id: uuidv4(),
        title: "Develop the Backend API",
        icon: "Code",
        projectName: "AProject Title",
        status: "Completed",
        priority: "High",
        createdAt: "2024-08-26T11:00:00Z",
        updatedAt: "2024-08-28T15:00:00Z",
      },
      {
        id: uuidv4(),
        title: "Write Unit Tests",
        icon: "BugReport",
        projectName: "AProject Title",
        status: "Completed",
        priority: "Medium",
        createdAt: "2024-08-26T12:00:00Z",
        updatedAt: "2024-08-28T16:00:00Z",
      },
    ],
  },
  {
    id: uuidv4(),
    clerkUserId: "123",
    title: "cProject Title 2",
    createdAt: "2024-08-27T10:00:00Z",
    updatedAt: "2024-08-28T14:30:00Z",
    icon: "LocalLibrary",
    tasks: [
      {
        id: uuidv4(),
        title: "Create the UI Design of the task zezeeezezze",
        icon: "Movie",
        projectName: "cProject Title 2",
        status: "In Progress",
        priority: "Low",
        createdAt: "2024-08-26T10:00:00Z",
        updatedAt: "2024-08-28T14:30:00Z",
      },
      {
        id: uuidv4(),
        title: "Create the UI Design of the task the the the",
        icon: "Movie",
        projectName: "cProject Title 2",
        status: "In Progress",
        priority: "Low",
        createdAt: "2024-08-26T10:00:00Z",
        updatedAt: "2024-08-28T14:30:00Z",
      },
      {
        id: uuidv4(),
        title: "Create the UI Design of the task",
        icon: "Movie",
        projectName: "cProject Title 2",
        status: "In Progress",
        priority: "Low",
        createdAt: "2024-08-26T10:00:00Z",
        updatedAt: "2024-08-28T14:30:00Z",
      },
      {
        id: uuidv4(),
        title: "Create the UI Design of the task yazazazaza",
        icon: "Movie",
        projectName: "cProject Title 2",
        status: "In Progress",
        priority: "Low",
        createdAt: "2024-08-26T10:00:00Z",
        updatedAt: "2024-08-28T14:30:00Z",
      },
    ],
  },
];
