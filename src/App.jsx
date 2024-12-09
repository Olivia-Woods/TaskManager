import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import "./styles/App.css";

// App Component: The root component that manages the application's main state and functionality
function App() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage when the app loads
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // Parse tasks or initialize as an empty array
  });

  // Effect to save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Sync tasks with localStorage
  }, [tasks]);

  /**
   * Add a new task to the list.
   * @param {Object} newTask - The task object to add.
   */
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Append the new task to the current list
  };

  /**
   * Add a subtask to a specific task by its ID.
   * @param {number} taskId - The ID of the task to add the subtask to.
   * @param {string} subtaskText - The text of the subtask to add.
   */
  const addSubtask = (taskId, subtaskText) => {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task) =>
          task.id === taskId
            ? {
                ...task, // Spread existing task properties
                subtasks: [
                  ...task.subtasks, // Retain existing subtasks
                  { id: Date.now(), text: subtaskText, isDone: false }, // Add new subtask
                ],
              }
            : task // Keep other tasks unchanged
      )
    );
  };

  /**
   * Delete a task by its ID.
   * @param {number} taskId - The ID of the task to delete.
   */
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Remove the task
  };

  /**
   * Toggle the "done" status of a task.
   * @param {number} taskId - The ID of the task to toggle.
   */
  const toggleTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task) =>
          task.id === taskId
            ? { ...task, isDone: !task.isDone } // Flip the "isDone" property
            : task // Keep other tasks unchanged
      )
    );
  };

  /**
   * Toggle the "priority" status of a task.
   * @param {number} taskId - The ID of the task to toggle.
   */
  const togglePriority = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task) =>
          task.id === taskId
            ? { ...task, isPriority: !task.isPriority } // Flip the "isPriority" property
            : task // Keep other tasks unchanged
      )
    );
  };

  /**
   * Move a task up or down in the list.
   * @param {number} index - The current index of the task in the list.
   * @param {number} direction - The direction to move (-1 for up, 1 for down).
   */
  const moveTask = (index, direction) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks]; // Create a shallow copy of the tasks array
      const targetIndex = index + direction;

      // Ensure the move is within bounds
      if (targetIndex < 0 || targetIndex >= newTasks.length) return newTasks;

      // Swap the tasks
      [newTasks[index], newTasks[targetIndex]] = [
        newTasks[targetIndex],
        newTasks[index],
      ];

      return newTasks; // Update state with the modified array
    });
  };

  /**
   * Toggle the "done" status of a subtask.
   * @param {number} taskId - The ID of the parent task.
   * @param {number} subtaskId - The ID of the subtask to toggle.
   */
  const toggleSubtaskDone = (taskId, subtaskId) => {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task) =>
          task.id === taskId
            ? {
                ...task, // Spread existing task properties
                subtasks: task.subtasks.map(
                  (subtask) =>
                    subtask.id === subtaskId
                      ? { ...subtask, isDone: !subtask.isDone } // Flip "isDone" for the subtask
                      : subtask // Keep other subtasks unchanged
                ),
              }
            : task // Keep other tasks unchanged
      )
    );
  };

  // Render the main application
  return (
    <div className="app">
      <h1>Task Manager</h1>
      {/* TaskForm Component: Allows the user to add new tasks */}
      <TaskForm onAdd={addTask} />
      {/* TaskList Component: Displays and manages all tasks */}
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleDone={toggleTaskDone}
        onTogglePriority={togglePriority}
        onMove={moveTask}
        onAddSubtask={addSubtask} // Handle adding subtasks
        onToggleSubtask={toggleSubtaskDone} // Handle toggling subtask "done" status
      />
    </div>
  );
}

export default App;
