# Task Manager

## Overview

A full-stack web application designed for dynamic task management. Built with **React** (frontend) and **Express.js** (backend), this app allows users to **add, edit, prioritise, complete, and delete tasks** effortlessly. It features a **drag-and-drop interface** and a **pink-perfect UI** with a **floating cloud animation** for an enhanced user experience.

## Features

- **Task Management** – Add, edit, complete, prioritise, and delete tasks.
- **Drag-and-Drop** – Easily rearrange tasks dynamically.
- **Backend Integration** – Task data is securely managed via an Express.js backend.
- **CRUD Operations** – Create, Read, Update, and Delete tasks seamlessly.
- **Animated Cloud Background** – A soft, floating cloud effect enhances the aesthetics.

## Technologies Used

### Frontend

- **React.js** – Built using functional components and React Hooks (`useState`, `useEffect`)
- **Vite** – Modern build tool for lightning-fast development
- **React Beautiful DnD** – Enables drag-and-drop task reordering
- **ESLint** – Linter to ensure consistent code quality
- **CSS** – Used for styling and responsive layout

### Backend

- **Node.js & Express.js** – Handles routing and CRUD logic for tasks
- **body-parser** – Middleware for parsing incoming JSON requests
- **cors** – Middleware to enable frontend-backend communication

### API Testing

- **Postman** – Used for manual testing of API endpoints
- **cURL** – Command-line tool to test RESTful routes

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Postman (optional for API testing)

### Steps

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```sh
   cd MiniProject2
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Set up the backend:**

   ```sh
   cd backend
   npm install
   node server.js
   ```

   Backend runs at **`http://localhost:5001`**.

5. **Start the frontend:**
   ```sh
   cd ..
   npm run dev
   ```
   Frontend runs at **`http://localhost:5173`**.

## API Testing

### Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| GET    | `/tasks`     | Fetch all tasks.         |
| POST   | `/tasks`     | Add a new task.          |
| PUT    | `/tasks/:id` | Update an existing task. |
| DELETE | `/tasks/:id` | Delete a specific task.  |

### Manual API Testing with cURL

```sh
# Fetch all tasks
curl http://localhost:5001/tasks

# Add a new task
curl -X POST http://localhost:5001/tasks -H "Content-Type: application/json" -d '{"text": "Test Task", "isDone": false, "isPriority": false}'

# Update a task (replace <id> with actual task ID)
curl -X PUT http://localhost:5001/tasks/<id> -H "Content-Type: application/json" -d '{"text": "Updated Task", "isDone": true}'

# Delete a task (replace <id> with actual task ID)
curl -X DELETE http://localhost:5001/tasks/<id>
```

## Known Issues & Future Enhancements

- **Persistent Storage:** Add database support (MongoDB or PostgreSQL).
- **User Authentication:** Enable personalised task lists per user.

## Contact

👩🏽‍💻 **Developer:** Olivia Woods 2025 
GitHub: [github.com/Olivia-Woods]
