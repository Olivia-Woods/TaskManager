import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onDelete, onEdit, onToggleDone }) => {
  // If no tasks, show a fallback message.
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Unique ID for React Rendering
          task={task} // Pass Task Data
          onDelete={() => onDelete(task.id)} // Handle Deletion
          onEdit={(newText) => onEdit(task.id, newText)} // Handle Editing
          onToggleDone={() => onToggleDone(task.id)} // Toggle Completion
        />
      ))}
    </ul>
  );
};

export default TaskList;
