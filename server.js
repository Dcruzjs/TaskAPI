const express = require("express");
const app = express();
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
const TaskRouter = require("./server/routes/TaskRouter");

require("./server/config/database");
require("dotenv").config();

// adding Helmet to enhance your API's security
// app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json());

// enabling CORS for all requests
// app.use(cors());

// adding morgan to log HTTP requests
// app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", TaskRouter);

app.listen(process.env.PORT, function () {
  console.log(`The users server is running in port ${process.env.PORT}.`);
});
