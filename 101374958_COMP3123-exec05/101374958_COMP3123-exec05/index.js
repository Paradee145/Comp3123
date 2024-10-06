const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express(); // Create the Express app
const router = express.Router(); // Create the router

app.use(express.json()); // Middleware to parse JSON bodies

// Define the path to user.json and home.html
const userFilePath = path.join(__dirname, 'user.json');
const homeFilePath = path.join(__dirname, 'home.html');

// Home route to serve home.html
router.get('/home', (req, res) => {
    res.sendFile(homeFilePath); // Send the HTML file
});

// Route to return all details from user.json file
router.get('/users', (req, res) => {
    fs.readFile(userFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading user.json' });
        }
        res.json(JSON.parse(data)); // Send the parsed JSON data as response
    });
});

// Login route to validate username and password
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({
            status: false,
            message: 'Username and password are required'
        });
    }

    // Read the user.json file
    fs.readFile(userFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Error reading user data'
            });
        }

        const users = JSON.parse(data);

        // Check if the username exists
        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(400).json({
                status: false,
                message: 'User Name is invalid'
            });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(400).json({
                status: false,
                message: 'Password is invalid'
            });
        }

        // If username and password are valid
        return res.status(200).json({
            status: true,
            message: 'User Is valid',
            userDetails: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                website: user.website,
                company: user.company
            }
        });
    });
});

// Logout route
router.get('/logout', (req, res) => {
    const { username } = req.query;

    // Check if username is provided
    if (!username) {
        return res.status(400).send('<b>Username is required to logout.</b>');
    }

    // Send the HTML formatted response
    res.send(`<b>${username} successfully logged out.</b>`);
});

// Use the router
app.use('/', router);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging purposes

    // Send a 500 error response with HTML message
    res.status(500).send('<h1>500 - Server Error</h1><p>Server Error</p>');
});

// Start the server
const port = process.env.PORT || 8083;
app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});
