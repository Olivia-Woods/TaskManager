import React, { useState } from "react";
// Import React to define the component and useState for state management.

const TaskForm = ({ onAdd }) => {
  // The TaskForm component receives an `onAdd` prop from its parent (App.jsx).
  // `onAdd` is a function used to pass the newly created task back to the parent.

  const [task, setTask] = useState("");
  // `task` is the state variable that holds the value of the input field.
  // `setTask` is a function to update the state whenever the input value changes.
  // The initial state is an empty string (`""`).

  const handleSubmit = (e) => {
    // This function is triggered when the form is submitted.
    e.preventDefault();
    // Prevents the default form submission behavior, such as reloading the page.

    if (task.trim()) {
      // Ensures the task is not empty or just spaces (removes extra spaces with `trim()`).
      onAdd(task);
      // Calls the `onAdd` function to send the new task back to the parent component (App.jsx).

      setTask("");
      // Resets the input field to an empty string after successfully adding the task.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* The form listens for a `submit` event and calls the `handleSubmit` function */}

      <input
        type="text"
        value={task}
        // Binds the `task` state to the input field.
        onChange={(e) => setTask(e.target.value)}
        // Updates the `task` state with the current value of the input field.
        placeholder="Enter Task"
        // Provides placeholder text to guide the user.
      />

      <button type="submit">Add Task</button>
      {/* A submit button that triggers the form submission and calls `handleSubmit` */}
    </form>
  );
};

export default TaskForm;
// Exports the TaskForm component so it can be imported and used in other files (e.g., App.jsx).

// Uses the useState hook to manage the task state, which stores the current value of the input field.
// The onChange event on the input field updates the task state with the user’s input.
// The onSubmit event on the form prevents the default behavior and ensures the task is added only if it is valid.
// onAdd is a function passed from the parent to allow the TaskForm to send new tasks to the parent component.
// After successfully submitting a task, the input field is cleared by resetting the task state to an empty string.
