const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
