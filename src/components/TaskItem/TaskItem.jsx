import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onEdit, onToggleDone }) => {
  const [isEditing, setIsEditing] = useState(false); // Edit Mode Toggle
  const [newText, setNewText] = useState(task.text); // Temp State for Editing

  // Save Changes to Task Text
  const handleSave = () => {
    if (newText.trim()) {
      onEdit(task.id, newText); // Update Task via Parent
      setIsEditing(false); // Exit Edit Mode
    } else {
      alert("Task text cannot be empty!");
    }
  };

  const formattedDate = new Date(task.timestamp).toLocaleString(); // Format Date

  return (
    <li className={`task-item ${task.isDone ? "done" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)} // Handle Input Change
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <span className="task-text">{task.text}</span>
          <small className="timestamp">{formattedDate}</small>
          <div className="buttons">
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={onDelete} className="delete-button">
              Delete
            </button>
            <button
              onClick={() => onToggleDone(task.id)}
              className="done-button"
            >
              {task.isDone ? "Undo" : "Done"}
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
