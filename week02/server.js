const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const indexRouter = require("./routes/index");

// Uses current working directory and joins public to get to common files
app.use(express.static(path.join(__dirname, 'public')));

// Use the router for "/"
app.use("/", indexRouter); 

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
