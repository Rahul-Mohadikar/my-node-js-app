const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like images) from the "images" folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the HTML file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
