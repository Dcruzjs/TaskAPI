const express = require("express");
const TaskController = require("./../controllers/TaskController");
const TaskRouter = express.Router();

TaskRouter.get("/", TaskController.getTasks);
TaskRouter.get("/:title", TaskController.getTask);
TaskRouter.post("/new", TaskController.createTask);
TaskRouter.put("/:title", TaskController.updateTask);
TaskRouter.delete("/remove/:title/", TaskController.deleteTask);

module.exports = TaskRouter;
