import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onToggleDone, onMoveUp, onMoveDown }) => {
  const formattedDate = new Date(task.timestamp).toLocaleString(); // Format the timestamp

  return (
    <li className={`task-item ${task.isDone ? "done" : ""}`}>
      <div className="task-content">
        {/* Task Text */}
        <span className="task-text">{task.text}</span>
        {/* Timestamp */}
        <small className="timestamp">{formattedDate}</small>
      </div>
      <div className="buttons">
        {/* Move Up Button */}
        <button onClick={onMoveUp} className="move-button">
          ↑
        </button>
        {/* Move Down Button */}
        <button onClick={onMoveDown} className="move-button">
          ↓
        </button>
        {/* Toggle Done Button */}
        <button onClick={onToggleDone} className="done-button">
          {task.isDone ? "Undo" : "Done"}
        </button>
        {/* Delete Button */}
        <button onClick={onDelete} className="delete-button">
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
