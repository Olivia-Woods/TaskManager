import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-Memory Task Storage
let tasks = [];

// Routes

// GET: Fetch All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST: Add New Task
app.post("/tasks", (req, res) => {
  const { text, isDone = false, isPriority = false } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Task text is required" });
  }

  const newTask = {
    id: Date.now().toString(), // Unique ID
    text,
    isDone,
    isPriority,
    timestamp: new Date().toLocaleString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT: Update Existing Task
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
    return res.status(404).json({ error: "Task not found" });
  }

  res.json({ message: "Task updated successfully" });
});

// DELETE: Delete A Task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json({ message: "Task deleted successfully" });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});