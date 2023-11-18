/*
  Filename: UpdateBookForm.js
  Student's Name: Sinthuvamsan Viswarupan
  Student ID: 200557495
  Date: November 16, 2023
*/

import React, { useEffect, useState } from 'react';
import { bookService } from '../service/BookService';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateBookForm() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    rating: '',
  });
  const { id } = useParams();
  useEffect(() => {
    fetchBook();
  }, [id]);

 
  const navigate = useNavigate();
  const fetchBook = async () => {
    try {
      // Fetch the book data by ID
      const response = await bookService.getBook(id);
      const book = response.data;

      // Set the book data in the state
      setBookData({
        title: book.title,
        author: book.author,
        rating: book.rating,
      });
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

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
      // Send the updated book data to the server
      const response = await bookService.updateBook(id, bookData);
      console.log('Book updated:', response.data);

      // Redirect to the book list after successful update
      navigate('/books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <h2>Update Book</h2>
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
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBookForm;
