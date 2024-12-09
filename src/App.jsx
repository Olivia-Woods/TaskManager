import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import "./styles/App.css";

function App() {
  // Retrieve tasks from localStorage on initial load
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever the `tasks` state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, isDone: false, isPriority: false }, // Ensure "isDone" and "isPriority" are initialized to false
    ]);
  };

  // Delete a task by its ID
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Toggle the "done" status of a task
  const toggleTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Toggle the "priority" status of a task
  const togglePriority = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isPriority: !task.isPriority } : task
      )
    );
  };

  // Move a task up or down in the list
  const moveTask = (index, direction) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const targetIndex = index + direction;

      // Prevent out-of-bounds moves
      if (targetIndex < 0 || targetIndex >= newTasks.length) return newTasks;

      // Swap the tasks
      [newTasks[index], newTasks[targetIndex]] = [
        newTasks[targetIndex],
        newTasks[index],
      ];

      return newTasks;
    });
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      {/* Form to add new tasks */}
      <TaskForm
        onAdd={(task) =>
          addTask({
            id: Date.now(),
            text: task,
            timestamp: Date.now(),
          })
        }
      />
      {/* List to display, delete, toggle "done", toggle "priority", and move tasks */}
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleDone={toggleTaskDone}
        onTogglePriority={togglePriority}
        onMove={moveTask}
      />
    </div>
  );
}

export default App;
