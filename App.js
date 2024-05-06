const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (such as HTML, CSS, and client-side JS) from the 'public' directory
app.use(express.static('public'));

// GET request to serve the registration form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// POST request to handle form submission
app.post('/register', (req, res) => {
    // Here you would typically save the submitted data to a database
    // For simplicity, let's just log the submitted data to the console
    console.log('Received registration data:', req.body);
    
    // Sending back a simple response indicating successful registration
    res.send('Registration Successful!');
});

// Start the server
app.listen(port, () => {
    
    console.log('server is running on port ${PORT}');
});
