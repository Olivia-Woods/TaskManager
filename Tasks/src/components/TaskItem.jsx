import React, { useState } from "react";

// Component: TaskItem
// This component represents a single task with options to edit, delete, toggle priority, and mark as done.
const TaskItem = ({
  task,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onEditTask,
}) => {
  // State: Tracks whether the task is in edit mode.
  const [isEditing, setIsEditing] = useState(false);

  // State: Tracks the edited text for the task.
  const [editText, setEditText] = useState(task.text);

  // Function: Saving Edited Task
  const handleSaveEdit = () => {
    onEditTask(task.id, editText); // Calls the parent function to save changes.
    setIsEditing(false); // Exits Edit Mode
  };

  return (
    <div
      className={`task-item ${task.isDone ? "done" : ""} ${
        task.isPriority ? "priority" : ""
      }`}
    >
      {/* Task Content Section */}
      <div className="task-content">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)} // Updates edit text as user types.
              className="edit-input"
            />
            <button onClick={handleSaveEdit} className="save-button">
              Save
            </button>
          </>
        ) : (
          <>
            <span className="task-text">{task.text}</span>{" "}
            <small className="timestamp">{task.timestamp}</small>{" "}
          </>
        )}
      </div>

      {/* Action Buttons Section */}
      {!isEditing && (
        <div className="buttons">
          {/* Mark As DONE */}
          <button onClick={onToggleDone} className="done-button">
            {task.isDone ? "✅" : "✅"}
          </button>
          {/* Toggle Priority */}
          <button onClick={onTogglePriority} className="priority-button">
            ⭐
          </button>
          {/* Edit */}
          <button onClick={() => setIsEditing(true)} className="edit-button">
            ✏️
          </button>
          {/* Delete */}
          <button onClick={onDelete} className="delete-button">
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
