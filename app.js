const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client')));

// API endpoint to get students
app.get('/students', (req, res) => {
  res.json(require('./data/students.json'));
});

// All other requests serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
