import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd({
        id: Date.now().toString(), // Unique string ID
        text: task.trim(),
        timestamp: new Date().toLocaleString(), // Human-readable date and time
        isDone: false,
        isPriority: false,
      });
      setTask(""); // Clear input after adding
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
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
