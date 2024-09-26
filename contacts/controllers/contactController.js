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