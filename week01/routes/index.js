const express = require("express");
const router = express.Router();
const nameController = require("../controllers/namecontroller");
const Person = require("../model/personModel");

// Define the home route
router.get('/', nameController.getName);

// Route to fetch all people from MongoDB
router.get("/people", async (req, res) => {
    try {
        const people = await Person.find(); // Fetch all records from the 'people' collection
        res.status(200).json(people);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

