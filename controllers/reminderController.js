const Reminder = require('../models/reminder');

// Create a new reminder
exports.createReminder = async (req, res) => {
  try {
    const newReminder = await Reminder.create(req.body);
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all reminders
exports.getAllReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a reminder by ID
exports.getReminderById = async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.reminderId);
    res.json(reminder);
  } catch (error) {
    res.status(404).json({ message: 'Reminder not found' });
  }
};

// Update a reminder
exports.updateReminder = async (req, res) => {
  try {
    const updatedReminder = await Reminder.findByIdAndUpdate(req.params.reminderId, req.body, { new: true });
    res.json(updatedReminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a reminder
exports.deleteReminder = async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.reminderId);
    res.json({ message: 'Reminder deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Reminder not found' });
  }
};
