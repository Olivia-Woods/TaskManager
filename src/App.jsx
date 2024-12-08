import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import "./styles/App.css";

function App() {
  // Load Tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save Tasks to localStorage When They Change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add New Task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, isDone: false }, // Default is not done
    ]);
  };

  // Delete a Task by ID
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Edit a Task by ID
  const editTask = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  // Toggle Task Completion
  const toggleTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm
        onAdd={(task) =>
          addTask({
            id: Date.now(), // Unique ID
            text: task, // Task Text
            timestamp: Date.now(), // Creation Time
          })
        }
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleDone={toggleTaskDone}
      />
    </div>
  );
}

export default App;
