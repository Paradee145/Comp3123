const express = require('express');
const app = express();

// Define port
const SERVER_PORT = 3001;  


// Route: GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// Route: GET /user (query parameters)
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

// Route: POST /user/:firstname/:lastname (path parameters)
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
