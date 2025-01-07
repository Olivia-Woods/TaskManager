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
  // Render a message if there are no tasks
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available. Add one above!</p>;
  }

  return (
    // Wrapper for the droppable area
    <Droppable droppableId="taskList">
      {(provided) => (
        <ul
          className="task-list"
          {...provided.droppableProps} // Spread droppable props
          ref={provided.innerRef} // Attach the provided ref
        >
          {/* Map over tasks and render each as a draggable item */}
          {tasks.map((task, index) => (
            <Draggable
              key={task.id.toString()} // Use task ID as the unique key
              draggableId={task.id.toString()} // Assign a unique draggable ID
              index={index} // Specify the index for drag positioning
            >
              {(provided) => (
                <li
                  ref={provided.innerRef} // Attach the provided ref for dragging
                  {...provided.draggableProps} // Spread draggable props
                  {...provided.dragHandleProps} // Spread drag handle props
                >
                  {/* Render individual task using the TaskItem component */}
                  <TaskItem
                    task={task} // Pass the task data
                    onDelete={() => onDelete(task.id)} // Handle task deletion
                    onToggleDone={() => onToggleDone(task.id)} // Toggle done status
                    onTogglePriority={() => onTogglePriority(task.id)} // Toggle priority
                    onEditTask={onEditTask} // Handle task editing
                  />
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder} {/* Placeholder for spacing during drag */}
        </ul>
      )}
    </Droppable>
  );
};

export default TaskList;
