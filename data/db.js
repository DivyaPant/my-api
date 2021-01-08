const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://divya:qwertyuiop@cluster0.3bnex.mongodb.net/data?retryWrites=true&w=majority"; //db url

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Database connection established!");
    },
    (err) => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );

// require any models

require("../models/task");
