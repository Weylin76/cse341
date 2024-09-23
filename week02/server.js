const express = require("express");
const path = require("path");
const mongoose = require("mongoose"); // Import Mongoose

const app = express();
const port = process.env.PORT || 8080;
const indexRouter = require("./routes/index");

// MongoDB Connection String (Include the database name at the end of the string)
const mongoURI = "mongodb+srv://weylin76:Dougwe_01@cluster0.dgdrh.mongodb.net/myDatabaseName"; 

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the application if MongoDB connection fails
  });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Use the router for "/"
app.use("/", indexRouter); 

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
