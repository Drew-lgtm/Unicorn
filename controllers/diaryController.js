const DiaryEntry = require('../models/diaryEntry');

// Create a new diary entry
exports.createDiaryEntry = async (req, res) => {
  try {
    const newEntry = await DiaryEntry.create(req.body);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all diary entries
exports.getAllDiaryEntries = async (req, res) => {
  try {
    const entries = await DiaryEntry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a diary entry by ID
exports.getDiaryEntryById = async (req, res) => {
  try {
    const entry = await DiaryEntry.findById(req.params.entryId);
    res.json(entry);
  } catch (error) {
    res.status(404).json({ message: 'Diary entry not found' });
  }
};

// Update a diary entry
exports.updateDiaryEntry = async (req, res) => {
  try {
    const updatedEntry = await DiaryEntry.findByIdAndUpdate(req.params.entryId, req.body, { new: true });
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a diary entry
exports.deleteDiaryEntry = async (req, res) => {
  try {
    await DiaryEntry.findByIdAndDelete(req.params.entryId);
    res.json({ message: 'Diary entry deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Diary entry not found' });
  }
};
