import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onToggleDone, onTogglePriority }) => (
  <div
    className={`task-item ${task.isDone ? "done" : ""} ${
      task.isPriority ? "priority" : ""
    }`}
  >
    <div className="task-content">
      <small className="timestamp">{task.timestamp}</small>
      <span className="task-text">{task.text}</span>
    </div>
    <div className="buttons">
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
  </div>
);

export default TaskItem;
