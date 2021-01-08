//defining schemas with key and values to be updated on db

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("database", TaskSchema);
