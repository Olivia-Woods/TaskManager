import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5001;

// Middleware: Enable CORS and Parse JSON Request
app.use(cors());
app.use(bodyParser.json());

// In-memory Array: Store Tasks. This data is lost when the server restarts.
let tasks = [];

// Routes

// Provides a welcome message and basic usage instructions.
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Task Manager API! Use the /tasks endpoint to manage tasks."
  );
});

// GET: Retrieve ALL Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST: Add A New Task
app.post("/tasks", (req, res) => {
  const { text, isDone = false, isPriority = false } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Task text is required!" });
  }

  const newTask = {
    id: Date.now().toString(),
    text,
    isDone,
    isPriority,
    timestamp: new Date().toLocaleString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT: Update an Existing Task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { text, isDone, isPriority } = req.body;

  let taskFound = false;

  tasks = tasks.map((task) => {
    if (task.id === id) {
      taskFound = true;
      return {
        ...task,
        text: text !== undefined ? text : task.text,
        isDone: isDone !== undefined ? isDone : task.isDone,
        isPriority: isPriority !== undefined ? isPriority : task.isPriority,
      };
    }
    return task;
  });

  if (!taskFound) {
    return res.status(404).json({ error: "Task not found!" });
  }

  res.json({ message: "Task updated successfully!" });
});

// DELETE: Remove A Task by ID
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;

  // Remove Task With Matching ID
  tasks = tasks.filter((task) => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: "Task not found!" });
  }

  res.json({ message: "Task deleted successfully!" });
});

// Start the server and listen for requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
