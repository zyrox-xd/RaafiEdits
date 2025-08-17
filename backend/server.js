// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());               // Allows frontend to connect
app.use(bodyParser.json());    // Parses JSON from frontend

// Form submission route
app.post('/submit-form', (req, res) => {
    const { name, email, projectDetails, service } = req.body;

    if (!name || !email || !projectDetails || !service) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // You can save to database here if needed
    console.log('Form submitted:', { name, email, projectDetails, service });

    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
