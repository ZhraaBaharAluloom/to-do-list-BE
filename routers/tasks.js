const express = require("express");

const {
  taskList,
  taskUpdate,
  taskDelete,
  taskCreate,
} = require("../controllers/taskControllers");

const router = express.Router();

router.get("/", taskList);

router.put("/:taskId", taskUpdate);

router.delete("/:taskId", taskDelete);

router.post("/", taskCreate);

module.exports = router;
