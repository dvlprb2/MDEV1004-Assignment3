/*
  Filename: CreatBookForm.js
  Student's Name: Bittu Patel
  Student ID: 200556453
  Date: November 16, 2023
*/

import React, { useState } from 'react';
import { bookService } from '../service/BookService';
import { useNavigate } from 'react-router-dom';

function CreateBookForm() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    rating: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the book data to the server to create a new book
      const response = await bookService.createBook(bookData);
      console.log('Book created:', response.data);

      // Redirect to the book list after successful creation
      navigate('/books');
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div>
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={bookData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBookForm;
