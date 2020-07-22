const express = require("express");
let tasks = require("./tasks");
const cors = require("cors");
const bodyParser = require("body-parser");

const taskRouters = require("./routers/tasks");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/tasks", taskRouters);

app.listen(8000, () => {
  console.log("hi");
});
