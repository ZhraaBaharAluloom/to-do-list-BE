const express = require("express");
const tasks = require("./tasks");
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
  foundTask.status = !foundTask.status;
  res.status(204).end();
});

// app.delete("/tasks/:taskId", (req, res) => {
//   const { taskId } = req.params;
//   const foundTask = tasks.find((task) => task.id === +taskId);

//   if (foundTask) {
//     tasks.filter((task) => task.id !== +taskId);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Not found" });
//   }
// });

app.post("/tasks", (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const status = true;
  const newTask = { id, status, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(8000, () => {
  console.log("hi");
});
