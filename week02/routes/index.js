const express = require("express");
const router = express.Router();
const infoController = require("../controllers/getInfo");

// Define the GET route for /professional
router.get("/professional", infoController.getInfo);

module.exports = router;
