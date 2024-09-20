const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const indexRouter = require("./routes/index");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the router for "/"
app.use("/", indexRouter); // This should mount the `/professional` route defined in indexRouter

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
