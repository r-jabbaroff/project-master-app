import TasksHeader from "./Components/TasksHeader";
import TasksList from "./Components/TasksList";
import TasksSubHeader from "./Components/TasksSubHeader";

function AllTasksContainer() {
  return (
    <div className="bg-slate-50 w-full flex-grow overflow-auto p-10 max-sm:p-8 max-sm:py-9">
      <TasksHeader />
      <TasksSubHeader />
      <TasksList />
    </div>
  );
}

export default AllTasksContainer;
