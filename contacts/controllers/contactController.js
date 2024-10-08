const Person = require("../model/personModel");

// Controller function to fetch all people
const getContacts = async (req, res) => {
    try {
        const people = await Person.find(); // grab all records for collection
        res.status(200).json(people); // if successful send response
    } catch (err) {
        res.status(500).json({ error: err.message }); // if unsuccessful send error message
    }
};

// Controller function to fetch a person by ID
const getPersonById = async (req, res) => {
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

// Add a new contact
const addContact = async (req, res) => {
    try {
        const newContact = new Person(req.body); // Create a new instance of the Person model
        await newContact.save(); // Save the new contact to the database
        res.status(201).json({
            message: "Contact added successfully",
            data: newContact
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding contact",
            error: error.message
        });
    }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const deletedContact = await Person.findByIdAndDelete(contactId); // Find and delete the contact

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({
            message: "Contact deleted successfully",
            data: deletedContact
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting contact",
            error: error.message
        });
    }
};

// Update an existing contact
const updateContact = async (req, res) => {
    const contactId = req.params.id;
    const updatedData = req.body;

    try {
        // Use `findByIdAndUpdate` to update the document directly
        const contact = await Person.findByIdAndUpdate(
            contactId,
            { $set: updatedData }, // Only set the fields present in the request body
            { new: true, runValidators: true } // Return the updated document
        );

        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(204).json({
            message: "Contact updated successfully",
            data: contact
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating contact",
            error: error.message
        });
    }
};

// Export all controller functions at the end
module.exports = {
    getContacts,
    getPersonById,
    addContact,
    deleteContact,
    updateContact
};
