import { Task } from "./Task";

export const TaskList = ({
  tasks,
  onWidthExpand,
  onTaskChange,
  onTaskDelete,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onExpand={onWidthExpand}
            onChange={onTaskChange}
            onDelete={onTaskDelete}
          />
        </li>
      ))}
    </ul>
  );
};
