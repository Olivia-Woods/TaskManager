import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({
  task,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onEditTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSaveEdit = () => {
    onEditTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div
      className={`task-item ${task.isDone ? "done" : ""} ${
        task.isPriority ? "priority" : ""
      }`}
    >
      <div className="task-content">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
            />
            <button onClick={handleSaveEdit} className="save-button">
              Save
            </button>
          </>
        ) : (
          <>
            <span className="task-text">{task.text}</span>
            <small className="timestamp">{task.timestamp}</small>
          </>
        )}
      </div>
      {!isEditing && (
        <div className="buttons">
          <button onClick={onToggleDone} className="done-button">
            {task.isDone ? "✅" : "✅"}
          </button>
          <button onClick={onTogglePriority} className="priority-button">
            ⭐
          </button>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            ✏️
          </button>
          <button onClick={onDelete} className="delete-button">
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
