const express = require('express');
const Group = require('../models/Group');
const router = express.Router();

// Get all groups
router.get('/', async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
    console.log('Request body:', req.body);  // Log the incoming request body
    const group = new Group({
      name: req.body.name,
      color: req.body.color
    });
  
    try {
      const newGroup = await group.save();
      res.status(201).json(newGroup);
    } catch (err) {
      console.error('Error creating group:', err);  // Log the error
      res.status(400).json({ message: err.message });
    }
  });
  
module.exports = router;
