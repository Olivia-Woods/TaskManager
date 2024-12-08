import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd({
        id: Date.now(), // Unique ID for the task
        text: task, // Task text entered by the user
        timestamp: Date.now(), // Timestamp when the task is created
      });
      setTask(""); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task} // Bind the input value to the task state
        onChange={(e) => setTask(e.target.value)} // Update state on input change
        placeholder="Enter Task" // Placeholder text for guidance
      />
      <button type="submit">Add Task</button> {/* Submit button */}
    </form>
  );
};

export default TaskForm;
