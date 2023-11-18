/*
  Filename: BookControllers.js
  Student's Name: Charvi Parhawk
  Student ID: 200557117
  Date: November 16, 2023
*/

const Book = require('../models/Book');

const bookController = {
  createBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const book = await newBook.save();
      res.json(book);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  /**
  * Displays a list of books fetched from the server.
  */
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  updateBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(book);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndRemove(req.params.id);
      res.json({ message: 'Book deleted' });
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

module.exports = bookController;
