import React, { useState } from "react";

// Component: TaskForm
// This component handles the form for adding new tasks.
const TaskForm = ({ onAdd }) => {
  // State: Tracks the current input value for the task.
  const [task, setTask] = useState("");

  // Function: Handles Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Add A New Task
      onAdd({
        id: Date.now().toString(), // Unique String ID
        text: task.trim(), // Remove Whitespace
        timestamp: new Date().toLocaleString(), // Timestamp
        isDone: false, // Default State
        isPriority: false, // Default State
      });
      setTask(""); // Clear Input After Adding Task
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    // JSX: Form
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
