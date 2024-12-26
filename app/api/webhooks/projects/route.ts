import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import Project from "../../../models/Project";
import connect from "../../../lib/connect";

export async function POST(req: Request) {
  try {
    const { title, icon, clerkUserId, tasks } = await req.json();

    await connect(); // Connect to the database

    const project = new Project({
      id: uuidv4(), // Generate a unique ID for the project
      title,
      icon,
      clerkUserId,
      createdAt: new Date(),
      updatedAt: new Date(),
      tasks: tasks.map((task: any) => ({
        id: uuidv4(), // Generate unique ID for each task
        title: task.title,
        icon: task.icon,
        projectName: title, // Associate the task with the project's title
        status: task.status || "In Progress", // Default status if not provided
        priority: task.priority || "Medium", // Default priority if not provided
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    });

    const savedProject = await project.save(); // Save the project to the database

    return NextResponse.json({ project: savedProject }); // Return the saved project as a response
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
