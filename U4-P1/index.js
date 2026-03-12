// Import express module
const express = require('express');

// Create express application
const app = express();

// Import router file
const router = require('./router');

// Use router for API routes
app.use('/api', router);

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});