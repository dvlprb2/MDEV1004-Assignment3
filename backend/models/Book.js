/*
  Filename: Book.js
  Student's Name: Sinthuvamsan Viswarupan
  Student ID: 200557495
  Date: November 16, 2023
*/

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
