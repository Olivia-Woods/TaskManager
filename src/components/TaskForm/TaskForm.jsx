import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState(""); // Track Input Value

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task); // Pass the task text to the parent.
      setTask(""); // Clear Input Field
    } else {
      alert("Task cannot be empty!"); // Notify User
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Update State on Input
        placeholder="Enter your task here..." // User Guidance
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
