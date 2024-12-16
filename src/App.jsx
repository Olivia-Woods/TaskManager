import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { DragDropContext } from "react-beautiful-dnd";
import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks when the component loads
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5001/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      const savedTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, savedTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: "DELETE",
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Toggle 'done' status
  const toggleTaskDone = async (taskId) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      const updatedTask = { ...taskToUpdate, isDone: !taskToUpdate.isDone };

      await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, isDone: updatedTask.isDone } : task
        )
      );
    } catch (error) {
      console.error("Error toggling task done status:", error);
    }
  };

  // Toggle priority
  const togglePriority = async (taskId) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      const updatedTask = {
        ...taskToUpdate,
        isPriority: !taskToUpdate.isPriority,
      };

      await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId
            ? { ...task, isPriority: updatedTask.isPriority }
            : task
        )
      );
    } catch (error) {
      console.error("Error toggling priority:", error);
    }
  };

  // Edit task text
  const editTask = async (taskId, newText) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      const updatedTask = { ...taskToUpdate, text: newText };

      await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, text: updatedTask.text } : task
        )
      );
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  // Drag and drop logic (kept as is)
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleDone={toggleTaskDone}
          onTogglePriority={togglePriority}
          onEditTask={editTask}
        />
      </DragDropContext>
    </div>
  );
};

export default App;
