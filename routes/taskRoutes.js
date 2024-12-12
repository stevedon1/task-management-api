const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware'); // Middleware for authentication

const router = express.Router();

// Routes for tasks
router.post('/', protect, createTask); // Create a new task
router.get('/', protect, getTasks); // Get all tasks
router.get('/:id', protect, getTaskById); // Get a specific task by ID
router.put('/:id', protect, updateTask); // Update a task
router.delete('/:id', protect, deleteTask); // Delete a task

module.exports = router;
