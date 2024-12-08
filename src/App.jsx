import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import "./styles/App.css";

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {/* TaskForm for adding tasks */}
      <TaskForm onAdd={addTask} />

      {/* TaskList for rendering tasks */}
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
