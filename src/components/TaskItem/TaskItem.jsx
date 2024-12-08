import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      <span>{task}</span>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
