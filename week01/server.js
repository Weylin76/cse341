const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");

dotenv.config(); // use env file for secure connection

const app = express();
const port = process.env.PORT || 3000; //use website port or local host

// MongoDB connection URI from .env file
const mongoURI = process.env.MONGO_URI; 

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit if there's a connection error
});

// Use the router
app.use("/", indexRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
