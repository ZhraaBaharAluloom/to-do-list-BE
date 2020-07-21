const express = require("express");
const tasks = require("./tasks");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json(tasks);
});

app.post("/", (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const status = true;
  const newTask = { id, status, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(8000, () => {
  console.log("hi");
});
