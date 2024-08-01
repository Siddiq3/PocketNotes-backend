const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  group: { type: String, required: true }  // Changed from groupId to group name
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
