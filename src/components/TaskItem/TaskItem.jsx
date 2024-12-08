import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false); // Track if the task is being edited
  const [newText, setNewText] = useState(task.text); // Temporary state for the edited text

  const handleSave = () => {
    if (newText.trim()) {
      onEdit(task.id, newText); // Pass the updated text to the parent along with the task ID
      setIsEditing(false); // Exit edit mode
    }
  };

  const formattedDate = new Date(task.timestamp).toLocaleString(); // Format the timestamp

  return (
    <li className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)} // Update newText as user types
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
          <div>
            <span className="task-text">{task.text}</span>
            <small className="timestamp">{formattedDate}</small>{" "}
            {/* Display the timestamp */}
          </div>
          <div className="buttons">
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={onDelete} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
