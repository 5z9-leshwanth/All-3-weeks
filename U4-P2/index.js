const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const bookRoute = require('./route/bookRoute');

app.use(bodyParser.json());

// Route middleware
app.use('/books', bookRoute);

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});