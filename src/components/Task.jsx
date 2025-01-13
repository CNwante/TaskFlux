import { useState } from "react";
import { Button } from "./Button";

export const Task = ({ task, onExpand, onChange, onDelete }) => {
  const [editing, setEditing] = useState(false);

  let taskContent;
  if (editing) {
    taskContent = (
      <input
        type="text"
        value={task.title}
        onChange={(e) => {
          onChange({
            ...task,
            title: e.target.value,
          });
        }}
        className="flex-grow border p-1 rounded"
      />
    );
  } else {
    taskContent = <span className="flex-grow">{task.title}</span>;
  }

  return (
    <div className="flex items-center justify-between gap-3 w-full p-2 border-b">
      <div className="flex items-center gap-3 flex-grow">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
          className="w-5 h-5 rounded-full border-2 border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        {taskContent}
      </div>
      <div className="flex items-center gap-2">
        {editing ? (
          <Button
            content="Save"
            onClick={() => {
              setEditing(false);
              onExpand(false);
            }}
            className="bg-green-600 py-1 w-16 rounded-full text-gray-50 font-bold"
          />
        ) : (
          <Button
            content="Edit"
            onClick={() => {
              setEditing(true);
              onExpand(true);
            }}
            className="bg-gray-600 py-1 w-16 rounded-full text-gray-50 font-bold"
          />
        )}
        <Button
          content="Delete"
          onClick={() => onDelete(task.id)}
          className="bg-red-600 py-1 w-20 rounded-full text-gray-50 font-bold"
        />
      </div>
    </div>
  );
};
