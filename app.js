const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON bodies
app.use(express.json());

// Endpoint to serve your API data
const students = require('./data/students.json');
app.get('/api/students', (req, res) => {
  res.json(students);
});

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, 'client')));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
