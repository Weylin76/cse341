const express = require("express");
const router = express.Router();
const nameController = require('../controllers/namecontroller');
const contactController = require("../controllers/contactController");

// Define the home route
router.get('/', nameController.getName);

// Get all contacts
router.get("/contacts", contactController.getContacts);

// Get a single person by ID
router.get("/contacts/:id", contactController.getPersonById);

//Add a person to the DB
router.post("/contacts", contactController.addContact);

// Delete a contact from the DB by ID
router.delete("/contacts/:id", contactController.deleteContact);

// Update a contact
router.put("/update/:id", contactController.updateContact);

module.exports = router;


