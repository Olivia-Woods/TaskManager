import React from "react";
// Import React to create a functional component.

import "./TaskItem.css";
// Import the CSS file for styling the TaskItem component.

const TaskItem = ({ task, onDelete }) => {
  // TaskItem is a functional component.
  // It receives two props:
  // 1. `task`: The task text to display, passed from TaskList.
  // 2. `onDelete`: A function to handle deleting this specific task.

  return (
    <li className="task-item">
      {/* The container for the task. The `className` is used for applying styles */}

      <span>{task}</span>
      {/* Displays the task text inside a <span>. */}

      <button onClick={onDelete} className="delete-button">
        {/* A button for deleting the task. */}
        Delete
        {/* Clicking this button triggers the `onDelete` function passed as a prop. */}
      </button>
    </li>
  );
};

export default TaskItem;
// Exports the TaskItem component so it can be imported and used in TaskList.

// TaskItem is responsible for rendering a single task and providing a way to delete it.
// It’s a stateless component because it doesn’t manage its own state.
