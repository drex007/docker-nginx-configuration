const express = require('express');
require('dotenv').config()
const version = process.env.VERSION || ""
const app = express();


// Middleware to parse JSON
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Another example route
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log("This is version", version)
    console.log(`Server is running on http://localhost:${PORT}`);
});