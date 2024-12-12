const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
// Initialize environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());



// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Task Management API is running...');
});
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
