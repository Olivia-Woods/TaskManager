import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  if (tasks.length === 0) {
    return <p>No tasks available. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Use the unique ID
          task={task} // Pass the entire task object
          onDelete={() => onDelete(task.id)} // Pass the ID for deletion
          onEdit={(newText) => onEdit(task.id, newText)} // Pass the ID and new text for editing
        />
      ))}
    </ul>
  );
};

export default TaskList;
