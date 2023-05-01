require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const authRoutes = require('./routes/authRoutes');

app.use(express.json()); // Middleware for parsing JSON request bodies
app.use('/api', authRoutes); // Use the authRoutes for any requests starting with /api

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




  

