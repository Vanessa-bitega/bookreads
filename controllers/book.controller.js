const express = require('express')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.uploadBook = upload.single('book'), (req, res) => {
    // Logic for handling file upload will go here
    
};