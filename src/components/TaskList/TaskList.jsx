import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Droppable, Draggable } from "react-beautiful-dnd";
import "./TaskList.css";

const TaskList = ({
  tasks,
  onDelete,
  onToggleDone,
  onTogglePriority,
  onEditTask,
}) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available. Add one above!</p>;
  }

  return (
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
