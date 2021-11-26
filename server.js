const express = require("express");
const app = express();
const cors = require("cors");
const TaskRouter = require("./server/routes/TaskRouter");

require("./server/config/database");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", TaskRouter);

app.listen(process.env.PORT, function () {
  console.log(`The users server is running in port ${process.env.PORT}.`);
});
