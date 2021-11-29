const { TaskModel } = require("../models/TaskModel");

const TaskController = {
  createTask: function (request, response) {
    console.log(request.body);
    // console.log(request.body.task);
    TaskModel.createTask(request.body)
      .then((task) => {
        response.statusMessage = "success";
        response.status(201).json(task);
      })
      .catch((error) => response.json(error));
  },
  getTasks: function (request, response) {
    TaskModel.getTasks().then((tasks) => {
      response.statusMessage = "success";
      response.status(200).json(tasks);
    });
  },
  getTask: function (request, response) {
    console.log(request.params);
    TaskModel.getTask(request.params)
      .then((task) => {
        response.statusMessage = "success";
        response.status(200).json(task);
      })
      .catch((error) => {
        console.log(error);
        response.json(error);
      });
  },
  updateTask: function (request, response) {
    console.log("request.params: ", request.params);
    console.log("request.body: ", request.body);

    if (Object.keys(request.body).length === 0) {
      response.statusMessage =
        "You need to provide at least one of the following fields to update the task ('title', 'description', 'completed')";
      response.status(406).end();
    } else {
      TaskModel.getTask(request.params).then((result) => {
        if (result === null) {
          throw new Error("That task doesn't exist");
        } else {
          TaskModel.updateTask(request.params, request.body).then((result) => {
            response.status(202).json(result);
          });
        }
      });
    }
  },
  deleteTask: function (request, response) {
    console.log(request.params);
    TaskModel.getTask(request.params)
      .then((task) => {
        if (task === null) {
          throw new Error("That task doesn't exist");
        } else {
          TaskModel.deleteTask({ title: task.title }).then((result) => {
            response.status(204).end();
          });
        }
      })
      .catch((error) => {
        response.statusMessage = error.message;
        response.status(404).end();
      });
  },
};

module.exports = TaskController;
