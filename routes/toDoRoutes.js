const express = require('express');
const router = express.Router();
const ToDoController = require('../controllers/toDoController');

// Create a new todo item
router.post('/todo', ToDoController.createToDoItem);

// Get all todo items
router.get('/todo', ToDoController.getAllToDoItems);

// Get a todo item by ID
router.get('/todo/:itemId', ToDoController.getToDoItemById);

// Update a todo item
router.put('/todo/:itemId', ToDoController.updateToDoItem);

// Delete a todo item
router.delete('/todo/:itemId', ToDoController.deleteToDoItem);

module.exports = router;
