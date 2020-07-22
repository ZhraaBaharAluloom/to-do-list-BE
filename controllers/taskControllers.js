let tasks = require("../tasks");

exports.taskList = (req, res) => {
  res.json(tasks);
};

exports.taskUpdate = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  foundTask.todo = !foundTask.todo;
  res.status(204).end();
};

exports.taskDelete = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);

  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +taskId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

exports.taskCreate = (req, res) => {
  const id = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
  const todo = true;
  const newTask = { id, todo, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
