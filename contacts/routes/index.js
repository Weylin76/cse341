const express = require("express");
const router = express.Router();
const nameController = require("../controllers/namecontroller");
const contactController = require("../controllers/contactController");
const singlePersonController = require("../controllers/signlePersonController");

// Define the home route
router.get('/', nameController.getName);

//Get people route
router.get("/people", contactController.getContacts);

//Get a person from the db
router.get("/person/:id", singlePersonController.getPersonById)

module.exports = router;

