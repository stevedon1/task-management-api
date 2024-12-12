const mongoose = require('mongoose');

// Task Schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a task title'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  dueDate: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Ensure every task is linked to a user
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

// Export the Task model
module.exports = mongoose.model('Task', taskSchema);
