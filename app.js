const express = require("express");
const tasks = require("./tasks");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json(tasks);
});

app.listen(8000, () => {
  console.log("hi");
});
