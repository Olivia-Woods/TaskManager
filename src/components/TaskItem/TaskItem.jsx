import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onToggleDone, onMoveUp, onMoveDown }) => {
  const formattedDate = new Date(task.timestamp).toLocaleString();

  return (
    <li className={`task-item ${task.isDone ? "done" : ""}`}>
      <div>
        <span className="task-text">{task.text}</span> {/* Task text */}
        <br />
        <small className="timestamp">{formattedDate}</small> {/* Timestamp */}
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
          <button onClick={onDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
