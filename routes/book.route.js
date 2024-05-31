

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route for uploading a book
router.post('/upload', bookController.uploadBook);

module.exports = router;
