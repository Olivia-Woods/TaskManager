import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
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

      {/* Task list rendering */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => deleteTask(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
