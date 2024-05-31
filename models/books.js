const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  filePath: { type: String, required: true },
  dateUploaded: { type: Date, default: Date.now },
  // Additional fields can be added as needed
});

module.exports = mongoose.model('Book', bookSchema);
