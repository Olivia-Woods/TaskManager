import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({
  tasks,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onMove,
}) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggleDone={() => onToggleDone(task.id)}
          onTogglePriority={() => onTogglePriority(task.id)} // Pass the toggle priority handler
          onMoveUp={() => onMove(index, -1)}
          onMoveDown={() => onMove(index, 1)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
