import React, { useState } from "react";

// TaskForm Component: Handles the creation of a new task.
const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState(""); // State for task input

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Call the parent function to add the new task
      onAdd({
        id: Date.now(),
        text: task.trim(), // Ensure clean input
        timestamp: Date.now(),
        isDone: false,
        isPriority: false,
        subtasks: [], // Initialize an empty subtasks array
      });
      setTask(""); // Clear the input field
    } else {
      alert("Task cannot be empty!"); // Simple validation
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
        aria-label="Task Input" // Accessibility
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
