const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Get notes by group name
router.get('/:groupName', async (req, res) => {
  try {
    const notes = await Note.find({ group: req.params.groupName });  // Use req.params.groupName
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new note
router.post('/', async (req, res) => {
  const note = new Note({
    content: req.body.content,
    group: req.body.group  // Changed from groupId to group
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
