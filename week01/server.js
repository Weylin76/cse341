const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URI
const mongoURI = "mongodb+srv://weylin76:Dougwe_01@cluster0.dgdrh.mongodb.net/demo"; 

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
