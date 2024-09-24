const express = require("express");
const router = express.Router();
const nameController = require("../controllers/namecontroller");
const contactController = require("../controllers/contactController");

// Define the home route
router.get('/', nameController.getName);

//Get people route
router.get("/people", contactController.getContacts);

module.exports = router;

