const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const doc = {
    info: {
        title: 'My API',
        description: 'API Documentation',
    },
    host: process.env.HOST || `localhost:${port}`,
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

// Generate Swagger documentation
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    // Middleware to parse incoming JSON requests
    app.use(express.json());

    // MongoDB connection URI from .env file
    const mongoURI = process.env.MONGO_URI;

    // Connect to MongoDB without deprecated options
    mongoose.connect(mongoURI)
        .then(() => console.log("MongoDB connected successfully"))
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err.message);
            process.exit(1);
        });

    // Use the router
    app.use("/", indexRouter);

    // Serve Swagger UI
    const swaggerDocument = require('./swagger-output.json');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});


