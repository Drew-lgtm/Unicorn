const ToDoList = require('../models/toDoList');

// Create a new todo item
exports.createToDoItem = async (req, res) => {
  try {
    const newItem = await ToDoList.findByIdAndUpdate(
      req.body.listId,
      { $push: { items: req.body.item } },
      { new: true }
    );
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all todo items
exports.getAllToDoItems = async (req, res) => {
  try {
    const items = await ToDoList.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a todo item by ID
exports.getToDoItemById = async (req, res) => {
  try {
    const item = await ToDoList.findOne({ 'items._id': req.params.itemId });
    res.json(item);
  } catch (error) {
    res.status(404).json({ message: 'Todo item not found' });
  }
};

// Update a todo item
exports.updateToDoItem = async (req, res) => {
  try {
    const updatedItem = await ToDoList.findOneAndUpdate(
      { 'items._id': req.params.itemId },
      { $set: { 'items.$': req.body } },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a todo item
exports.deleteToDoItem = async (req, res) => {
  try {
    await ToDoList.findOneAndUpdate(
      { 'items._id': req.params.itemId },
      { $pull: { items: { _id: req.params.itemId } } }
    );
    res.json({ message: 'Todo item deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Todo item not found' });
  }
};
