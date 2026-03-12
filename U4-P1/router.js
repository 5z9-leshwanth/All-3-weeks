// Import express
const express = require('express');

// Create router object
const route = express.Router();

// GET request
route.get('/', (req, res) => {

    // Send success status
    res.status(200);

    // Send response
    res.send('Hello, World! In GET');
});

// POST request
route.post('/', (req, res) => {

    // Send created status
    res.status(201);

    // Send response
    res.send('Hello, World! In POST');
});

// Export router
module.exports = route;