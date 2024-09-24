const Person = require("../model/personModel");

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
