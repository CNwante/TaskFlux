import { useState } from "react";
import { Button } from "./Button";

export const AddTask = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  return (
    <div className="bg-gray-200 flex justify-between rounded-full my-4">
      <input
        type="text"
        placeholder="Enter your task"
        className="w-4/5 bg-gray-200 p-2 rounded-full"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <Button
        content="Add Task"
        onClick={() => {
          setTaskTitle("");
          onAddTask(taskTitle);
        }}
        className="bg-green-600 text-gray-50 font-bold rounded-full w-36"
      />
    </div>
  );
};
