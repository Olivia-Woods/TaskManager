import React, { useState } from "react"; // Core library that allows you to build UI components. Import it in every component to use JSX.
// State is like a memory for your component - it stores dynamic data that can change over time.

const TaskForm = ({ onAdd }) => {
  // onAdd is a property passed to the TaskForm component from its parent (App.jsx).
  // It’s a function that allows TaskForm to “communicate” with the parent.
  // Whenever a new task is submitted, TaskForm calls onAdd to pass the task back to the parent.

  const [task, setTask] = useState("");
  // This line sets up state for the input field.

  const handleSubmit = (e) => {
    // Handles what happens when the form is submitted.
    e.preventDefault(); // Prevents the default form behavior (e.g., refreshing the page when the form is submitted).
    if (task.trim()) {
      // Ensures the task isn’t just empty spaces. trim() removes extra spaces before or after the text.
      onAdd(task); // Calls the onAdd function (passed from the parent) and sends the new task as an argument. This tells the parent component (App.jsx) to add the task to the list.
      setTask(""); // Clears the input field by resetting the state to an empty string.
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Updates the task state every time the user types something.
        placeholder="Enter Task"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Add Task
      </button>
    </form>
  );
};
