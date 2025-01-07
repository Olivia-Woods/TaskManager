import React, { useState } from "react";
import "./TaskItem.css";

// Component: TaskItem
// This component represents a single task with options to edit, delete, toggle priority, and mark as done.
const TaskItem = ({
  task,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onEditTask,
}) => {
  // State: Tracks whether the task is in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State: Tracks the edited text for the task
  const [editText, setEditText] = useState(task.text);

  // Function: Handles saving the edited task
  const handleSaveEdit = () => {
    onEditTask(task.id, editText); // Calls the parent function to save changes
    setIsEditing(false); // Exits edit mode
  };

  return (
    // Wrapper div for the task item with conditional classes for "done" and "priority"
    <div
      className={`task-item ${task.isDone ? "done" : ""} ${
        task.isPriority ? "priority" : ""
      }`}
    >
      {/* Task content section */}
      <div className="task-content">
        {/* Conditionally render the edit input or the task text */}
        {isEditing ? (
          <>
            <input
              type="text"
              value={editText} // Binds input to the current edit text
              onChange={(e) => setEditText(e.target.value)} // Updates edit text as user types
              className="edit-input"
            />
            <button onClick={handleSaveEdit} className="save-button">
              Save
            </button>
          </>
        ) : (
          <>
            <span className="task-text">{task.text}</span>{" "}
            {/* Display task text */}
            <small className="timestamp">{task.timestamp}</small>{" "}
            {/* Display timestamp */}
          </>
        )}
      </div>

      {/* Action buttons section */}
      {!isEditing && (
        <div className="buttons">
          {/* Mark as done button */}
          <button onClick={onToggleDone} className="done-button">
            {task.isDone ? "✅" : "✅"}
          </button>
          {/* Toggle priority button */}
          <button onClick={onTogglePriority} className="priority-button">
            ⭐
          </button>
          {/* Edit button to enable edit mode */}
          <button onClick={() => setIsEditing(true)} className="edit-button">
            ✏️
          </button>
          {/* Delete button to remove the task */}
          <button onClick={onDelete} className="delete-button">
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
