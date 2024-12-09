import React from "react";
import "./TaskItem.css";

const TaskItem = ({
  task,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onMoveUp,
  onMoveDown,
}) => {
  const formattedDate = new Date(task.timestamp).toLocaleString();

  return (
    <li
      className={`task-item ${task.isDone ? "done" : ""} ${
        task.isPriority ? "priority" : ""
      }`}
    >
      <div className="task-content">
        <span className="task-text">{task.text}</span>
        <br />
        <small className="timestamp">{formattedDate}</small>
      </div>
      <div className="buttons">
        <button onClick={onMoveUp} className="move-button">
          ↑
        </button>
        <button onClick={onMoveDown} className="move-button">
          ↓
        </button>
        <button onClick={onToggleDone} className="done-button">
          {task.isDone ? "Undo" : "Done"}
        </button>
        <button onClick={onTogglePriority} className="priority-button">
          ⭐
        </button>
        <button onClick={onDelete} className="delete-button">
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
