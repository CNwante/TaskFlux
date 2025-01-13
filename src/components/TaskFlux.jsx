import { useState } from "react";
import { useImmer } from "use-immer";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

let nextId = 1;
const initialTasks = [{ id: 0, title: "Placeholder task", done: true }];

export const TaskFlux = () => {
  const [tasks, updateTasks] = useImmer(initialTasks);
  const [expanded, setExpanded] = useImmer(false);

  const handleAddTask = (taskTitle) => {
    updateTasks((draft) => {
      draft.push({
        id: nextId++,
        title: taskTitle,
        done: false,
      });
    });
  };

  const handleExpansion = (isExpanded) => {
    setExpanded(isExpanded);
  };

  const handleChangeTask = (nextTask) => {
    updateTasks(
      tasks.map((task) => {
        return task.id === nextTask.id ? nextTask : task;
      })
    );
    setExpanded(expanded);
  };

  const handleDeleteTask = (taskId) => {
    updateTasks((draft) => {
      const index = draft.findIndex((t) => t.id === taskId);
      draft.splice(index, 1);
    });
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
