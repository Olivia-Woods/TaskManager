import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, isDone: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const moveTask = (index, direction) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const targetIndex = index + direction;

      if (targetIndex < 0 || targetIndex >= newTasks.length) return newTasks; // Prevent out-of-bounds move

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
      <TaskForm
        onAdd={(task) =>
          addTask({
            id: Date.now(),
            text: task,
            timestamp: Date.now(),
          })
        }
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleDone={toggleTaskDone}
        onMove={moveTask}
      />
    </div>
  );
}

export default App;
