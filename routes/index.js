const express = require("express");
const router = express.Router();
const nameController = require("../controllers/namecontroller");

//Define the home route
router.get('/', nameController.getName);

module.exports = router;