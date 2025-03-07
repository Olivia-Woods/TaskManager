# Task Manager

## Overview

A full-stack web application for managing tasks dynamically. Built using **React** for the frontend and **Express** for the backend, this app allows users to add, edit, prioritise, complete, and delete tasks. Features include a drag-and-drop interface and a beautifully styled, responsive UI.

## Features

- **Task Management**: Add, edit, complete, prioritise, and delete tasks.
- **Drag-and-Drop**: Rearrange tasks dynamically.
- **Responsive Design**: Beautifully styled and fully responsive UI.
- **Backend Integration**: All task data is stored and managed via an Express.js backend.
- **CRUD Operations**: Create, Read, Update, and Delete tasks seamlessly.

## Technologies Used

**Frontend**:

- React (hooks like `useState`, `useEffect`)
- CSS for styling and responsiveness

**Backend**:

- Express.js
- Middleware: `body-parser`, `cors`

## Setup Instructions

### Prerequisites:

- Node.js and npm installed
- Postman (optional for API testing)

### Steps:

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd MiniProject2

3. Install dependencies:
   npm install

4. Set up the backend:

   - Navigate to the backend folder:
     cd backend

   - Install backend dependencies:
     npm install

   - Start the backend server:
     node server.js

   - The backend runs at `http://localhost:5001`.

5. Start the frontend:

   - Navigate back to the root directory:
     cd ..

   - Start the frontend:
     npm run dev

   - The frontend runs at `http://localhost:5173`.

## Testing

### API Endpoints:

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| GET    | `/tasks`     | Fetch all tasks.         |
| POST   | `/tasks`     | Add a new task.          |
| PUT    | `/tasks/:id` | Update an existing task. |
| DELETE | `/tasks/:id` | Delete a specific task.  |

#### Manual Testing:

1. **GET `/tasks`**:
   Fetch all tasks using `curl`:
   curl http://localhost:5001/tasks
2. **POST `/tasks`**:
   Add a new task using `curl`:
   curl -X POST http://localhost:5001/tasks -H "Content-Type: application/json" -d '{"text": "Test Task", "isDone": false, "isPriority": false}'
3. **PUT `/tasks/:id`**:
   Update a task using `curl` (replace `<id>` with the task ID):
   curl -X PUT http://localhost:5001/tasks/<id> -H "Content-Type: application/json" -d '{"text": "Updated Task", "isDone": true}'
4. **DELETE `/tasks/:id`**:
   Delete a task using `curl` (replace `<id>` with the task ID):
   curl -X DELETE http://localhost:5001/tasks/<id>

## Known Issues and Future Enhancements

- Add persistent storage (e.g., MongoDB or PostgreSQL).
- Implement user authentication for personalised task lists.

## Acknowledgments

- Built as part of IOD course!
