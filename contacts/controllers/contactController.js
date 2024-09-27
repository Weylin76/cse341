const Person = require("../model/personModel");

// Controller function to fetch all people
exports.getContacts = async (req, res) => {
    try {
        const people = await Person.find(); // grab all records for collection
        res.status(200).json(people); // if successful send response
    } catch (err) {
        res.status(500).json({ error: err.message }); // if unsuccessful send error message
    }
};

// Controller function to fetch a person by ID
exports.getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id); // Fetch a single record based on the ID
        if (!person) {
            return res.status(404).json({ error: "Person not found" });
        }
        res.status(200).json(person); // Send the found record
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};