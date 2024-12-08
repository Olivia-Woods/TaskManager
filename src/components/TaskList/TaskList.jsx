import React from "react";
// Import React to define the functional component.

import TaskItem from "../TaskItem/TaskItem";
// Import the TaskItem component for rendering individual tasks.

import "./TaskList.css";
// Import the CSS file for styling the TaskList component.

const TaskList = ({ tasks, onDelete }) => {
  // TaskList is a functional component that receives two props:
  // 1. `tasks`: An array of tasks to display.
  // 2. `onDelete`: A function to handle the deletion of a specific task.

  if (tasks.length === 0) {
    // Checks if the `tasks` array is empty.
    return <p>No tasks available. Add one above!</p>;
    // If there are no tasks, display a user-friendly message.
  }

  return (
    <ul className="task-list">
      {/* Maps over the `tasks` array and renders a TaskItem for each task. */}
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          // The `key` prop helps React identify and optimize updates for list items.
          task={task}
          // Pass the current task text to TaskItem as a prop.
          onDelete={() => onDelete(index)}
          // Pass a function to delete the task.
          // The `onDelete` function is invoked with the index of the task to delete.
        />
      ))}
    </ul>
  );
};

export default TaskList;
// Exports the TaskList component so it can be imported and used in App.jsx.

// TaskList is responsible for rendering the entire list of tasks.
// tasks: An array of tasks to display.
// onDelete: A callback function passed from the parent (App.jsx) to delete a task.
// If tasks is empty, a message is displayed instead of the list.
// Uses the .map() function to iterate over the tasks array and render a TaskItem for each task.
// Each TaskItem is passed the task data (task) and a delete handler (onDelete).
// The key prop ensures React can efficiently track changes to list items.
