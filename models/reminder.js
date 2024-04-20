const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  triggerDate: { type: Date, required: true }
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
