import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

// TaskList Component: Manages rendering of the task list
const TaskList = ({
  tasks,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onMove,
  onAddSubtask,
  onToggleSubtask,
}) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available. Add one above!</p>; // Empty state
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggleDone={() => onToggleDone(task.id)}
          onTogglePriority={() => onTogglePriority(task.id)}
          onMoveUp={() => onMove(index, -1)}
          onMoveDown={() => onMove(index, 1)}
          onAddSubtask={(subtaskText) => onAddSubtask(task.id, subtaskText)}
          onToggleSubtask={(taskId, subtaskId) =>
            onToggleSubtask(taskId, subtaskId)
          }
        />
      ))}
    </ul>
  );
};

export default TaskList;
