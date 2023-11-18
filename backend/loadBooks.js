/*
  Filename: loadBooks.js
  Student's Name: Bittu Patel
  Student ID: 200556453
  Date: November 16, 2023
*/

const mongoose = require('mongoose');
const fs = require('fs');
const Book = require('./models/Book');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const loadBooks = async () => {
    try {
        const data = fs.readFileSync('./books.json', 'utf8');
        const books = JSON.parse(data);
        await Book.insertMany(books);
        console.log('Books have been successfully loaded!');
    } catch (err) {
        console.error('Error loading books:', err);
    } finally {
        mongoose.connection.close();
    }
};

loadBooks();
