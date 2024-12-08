import React from "react";
import TaskItem from "../TaskItem/TaskItem"; // Adjust path as per your folder structure
import "./TaskList.css";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
};

export default TaskList;
