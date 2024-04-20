const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Create a new user
router.post('/users', UserController.createUser);

// Get a user by ID
router.get('/users/:userId', UserController.getUserById);

// Update a user
router.put('/users/:userId', UserController.updateUser);

// Delete a user
router.delete('/users/:userId', UserController.deleteUser);

module.exports = router;
