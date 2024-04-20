const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ['admin', 'student', 'public'], required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
