const express = require('express');
const router = express.Router();
const NoteController = require('../controllers/noteController');

// Create a new note
router.post('/notes', NoteController.createNote);

// Get all notes
router.get('/notes', NoteController.getAllNotes);

// Get a note by ID
router.get('/notes/:noteId', NoteController.getNoteById);

// Update a note
router.put('/notes/:noteId', NoteController.updateNote);

// Delete a note
router.delete('/notes/:noteId', NoteController.deleteNote);

module.exports = router;
