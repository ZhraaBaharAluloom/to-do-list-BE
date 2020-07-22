const express = require("express");
let tasks = require("./tasks");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.put("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  foundTask.todo = !foundTask.todo;
  res.status(204).end();
});

app.delete("/tasks/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);

  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +taskId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.post("/tasks", (req, res) => {
  const id = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
  const todo = true;
  const newTask = { id, todo, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(8000, () => {
  console.log("hi");
});
