const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for the form
app.post('/submit-form', (req, res) => {
    const { name, email, projectDetails, service } = req.body;

    if (!name || !email || !projectDetails || !service) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // TODO: Save to DB or send email here
    console.log('Form submitted:', { name, email, projectDetails, service });

    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
