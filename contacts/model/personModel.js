const mongoose = require("mongoose");

// Define a schema
const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date
});

// Create a model based on the schema, explicitly set collection name to 'people'
const Person = mongoose.model("Person", personSchema, 'people'); // 'people' is the collection name in MongoDB

module.exports = Person;

