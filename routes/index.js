const express = require("express");
const router = express.Router();
const nameController = require("../controllers/namecontroller");
const dogController = require("../controllers/dogcontroller");

//Define the home route
router.get('/', nameController.getName);

//Route for dogs
router.get("/dogs", dogController.getDog);



module.exports = router;