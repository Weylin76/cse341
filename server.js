const express = require("express");
const app = express();
const port = process.env.POET || 3000;
const indexRouter = require("./routes/index");

// Use the routes
app.use("/", indexRouter);

//Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});