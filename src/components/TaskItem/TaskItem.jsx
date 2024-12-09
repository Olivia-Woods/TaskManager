import React, { useState } from "react";
import "./TaskItem.css";

// TaskItem Component: Manages individual tasks and subtasks
const TaskItem = ({
  task,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onMoveUp,
  onMoveDown,
  onAddSubtask,
  onToggleSubtask,
}) => {
  const [isAddingSubtask, setIsAddingSubtask] = useState(false); // Track subtask input visibility
  const [subtaskText, setSubtaskText] = useState(""); // State for subtask input

  // Safeguard for undefined subtasks
  const subtasks = task.subtasks || [];

  // Handle adding a new subtask
  const handleAddSubtask = () => {
    if (subtaskText.trim()) {
      onAddSubtask(subtaskText); // Pass subtask text to parent
      setSubtaskText(""); // Clear input field
      setIsAddingSubtask(false); // Hide input
    }
  };

  return (
    <li
      className={`task-item ${task.isDone ? "done" : ""} ${
        task.isPriority ? "priority" : ""
      }`}
    >
      {/* Task content */}
      <div className="task-content">
        <span className="task-text">{task.text || "Unnamed Task"}</span>
        <br />
        <small className="timestamp">
          {new Date(task.timestamp).toLocaleString()}
        </small>
      </div>

      {/* Action buttons */}
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
        <button onClick={onTogglePriority} className="priority-button">
          ⭐
        </button>
        <button onClick={onDelete} className="delete-button">
          🗑️
        </button>
        <button
          onClick={() => setIsAddingSubtask(!isAddingSubtask)}
          className="add-subtask-button"
        >
          ➕
        </button>
      </div>

      {/* Subtask input field */}
      {isAddingSubtask && (
        <div className="subtask-input">
          <input
            type="text"
            value={subtaskText}
            onChange={(e) => setSubtaskText(e.target.value)}
            placeholder="Enter subtask..."
          />
          <button onClick={handleAddSubtask} className="save-subtask-button">
            Add
          </button>
        </div>
      )}

      {/* Subtasks list */}
      <ul className="subtask-list">
        {subtasks.map((subtask) => (
          <li
            key={subtask.id}
            className={`subtask ${subtask.isDone ? "done" : ""}`}
          >
            <input
              type="checkbox"
              checked={subtask.isDone}
              onChange={() => onToggleSubtask(task.id, subtask.id)}
            />
            <span className={`subtask-text ${subtask.isDone ? "done" : ""}`}>
              {subtask.text || "Unnamed Subtask"}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TaskItem;
