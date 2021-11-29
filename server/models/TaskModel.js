const mongoose = require("mongoose");
/*
{
    "title":"Learn Angular",
    "description": "Reading Books",
    "completed": false

}
{
    title:"Learn Angular",
    description: "Reading Books",
    completed: false

}
*/
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("tasks", TaskSchema);

const TaskModel = {
  createTask: function (newTask) {
    return Task.create(newTask);
  },
  getTasks: function () {
    return Task.find();
  },
  getTask: function (title) {
    // console.log(title); //{title:"title"}
    return Task.findOne(title);
  },
  updateTask: function (condition, fieldsToUpdate) {
    return Task.findOneAndUpdate(
      condition,
      { $set: fieldsToUpdate },
      { new: true }
    );
  },
  deleteTask: function (title) {
    return Task.remove(title);
  },
};

module.exports = { TaskModel };
