const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  items: [{
    item: { type: String, required: true },
    completed: { type: Boolean, default: false }
  }]
});

const ToDoList = mongoose.model('ToDoList', toDoListSchema);

module.exports = ToDoList;
