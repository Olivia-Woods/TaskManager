import React, { useState } from "react";

// Component: TaskForm
// This component handles the form for adding new tasks
const TaskForm = ({ onAdd }) => {
  // State: Tracks the current input value for the task
  const [task, setTask] = useState("");

  // Function: Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (task.trim()) {
      // Add a new task with the provided input
      onAdd({
        id: Date.now().toString(), // Unique string ID
        text: task.trim(), // Remove any whitespace from the beginning and end of the string
        timestamp: new Date().toLocaleString(), // Timestamp for when the task was added
        isDone: false, // Default 'not done' state
        isPriority: false, // Default 'not priority' state
      });
      setTask(""); // Clear input after adding the task
    } else {
      alert("Task cannot be empty!"); // Simple validation to prevent empty tasks
    }
  };

  return (
    // JSX: Form for entering a new task
    <form onSubmit={handleSubmit}>
      {/* Input field for task text */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
        required
      />
      {/* Submit button */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
