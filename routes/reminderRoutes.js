const express = require('express');
const router = express.Router();
const ReminderController = require('../controllers/reminderController');

// Create a new reminder
router.post('/reminders', ReminderController.createReminder);

// Get all reminders
router.get('/reminders', ReminderController.getAllReminders);

// Get a reminder by ID
router.get('/reminders/:reminderId', ReminderController.getReminderById);

// Update a reminder
router.put('/reminders/:reminderId', ReminderController.updateReminder);

// Delete a reminder
router.delete('/reminders/:reminderId', ReminderController.deleteReminder);

module.exports = router;
