const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes); // This should match your API requests

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
