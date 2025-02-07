import { useImmer, useImmerReducer } from "use-immer";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { taskReducer } from "./taskReducer";

let nextId = 1;
const initialTasks = [{ id: 0, title: "Placeholder task", done: true }];

export const TaskFlux = () => {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  const [expanded, setExpanded] = useImmer(false);

  const handleAddTask = (taskTitle) => {
    dispatch({
      type: "ADD_TASK",
      id: nextId++,
      title: taskTitle,
    });
  };

  const handleChangeTask = (nextTask) => {
    dispatch({
      type: "CHANGE_TASK",
      task: nextTask,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "DELETE_TASK",
      id: taskId,
    });
  };

  const handleExpansion = (isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <div
      className={`${
        expanded ? "w-[600px]" : "w-[400px]"
      } h-auto m-auto bg-gray-50 p-4 rounded-md transition-all duration-300 ease-in-out`}
    >
      <h1 className="text-2xl font-bold">TaskFlux</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskChange={handleChangeTask}
        onTaskDelete={handleDeleteTask}
        onWidthExpand={handleExpansion}
      />
    </div>
  );
};
