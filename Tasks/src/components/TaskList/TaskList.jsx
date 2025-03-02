import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Droppable, Draggable } from "react-beautiful-dnd";
import "./TaskList.css";

// Component: TaskList
// This component renders a list of tasks and enables drag-and-drop functionality.
const TaskList = ({
  tasks,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onEditTask,
}) => {
  // Render a message if there are no tasks.
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available. Add one above!</p>;
  }

  return (
    // Wrapper for the droppable area.
    <Droppable droppableId="taskList">
      {(provided) => (
        <ul
          className="task-list"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {tasks.map((task, index) => (
            <Draggable
              key={task.id.toString()}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {/* Render individual task using the TaskItem component. */}
                  <TaskItem
                    task={task}
                    onDelete={() => onDelete(task.id)}
                    onToggleDone={() => onToggleDone(task.id)}
                    onTogglePriority={() => onTogglePriority(task.id)}
                    onEditTask={onEditTask}
                  />
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default TaskList;
