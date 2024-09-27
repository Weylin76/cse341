const express = require("express");
const router = express.Router();
const nameController = require('../controllers/nameController');
const contactController = require("../controllers/contactController");

// Define the home route
router.get('/', nameController.getName);

// Get all contacts
router.get("/contacts", contactController.getContacts);

// Get a single person by ID
router.get("/contacts/:id", contactController.getPersonById);

// Update a contact
router.put("/update/:id", contactController.updateContact);

module.exports = router;


