const express = require("express");
const router = express.Router();
const nameController = require("../controllers/namecontroller");
const contactController = require("../controllers/contactController");

// Define the home route
router.get('/', nameController.getName);

//Get people route
router.get("/contacts", contactController.getContacts);

//Get a person from the db
router.get("/contacts/:id", contactController.getPersonById)

module.exports = router;

