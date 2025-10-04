// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET route for your home page
app.get('/', (req, res) => {
  res.send('Welcome to the portfolio backend!');
});

// A route to handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // You would add logic here to handle the data,
  // like sending an email or saving to a database.
  console.log(`New contact message from: ${name} (${email})`);
  console.log(`Message: ${message}`);

  res.status(200).json({ message: 'Message received successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});