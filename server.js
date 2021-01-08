const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/taskController");
// db instance connection
require("./data/db");

const app = express();
const port = process.env.PORT || 8001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTERS

app
  .route("/database")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/database/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
