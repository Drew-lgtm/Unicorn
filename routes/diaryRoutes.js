const express = require('express');
const router = express.Router();
const DiaryController = require('../controllers/diaryController');

// Create a new diary entry
router.post('/diary', DiaryController.createDiaryEntry);

// Get all diary entries
router.get('/diary', DiaryController.getAllDiaryEntries);

// Get a diary entry by ID
router.get('/diary/:entryId', DiaryController.getDiaryEntryById);

// Update a diary entry
router.put('/diary/:entryId', DiaryController.updateDiaryEntry);

// Delete a diary entry
router.delete('/diary/:entryId', DiaryController.deleteDiaryEntry);

module.exports = router;
