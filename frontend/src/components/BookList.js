/*
  Filename: BookList.js
  Student's Name: Bittu Patel
  Student ID: 200556453
  Date: November 16, 2023
*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { bookService } from '../service/BookService';
/**
 * Displays a list of books fetched from the server.
 */
function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  /**
  * Fetches a list of books from the server and updates the state with the result.
  */

  const fetchBooks = async () => {
    try {
      const response = await bookService.getAllBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  /**
   * Deletes a book by its ID and refreshes the book list.
   *
   * @param {string} id - The ID of the book to be deleted.
   */

  const handleDelete = async (id) => {
    try {
      await bookService.deleteBook(id);
      fetchBooks(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
/**
 *  function for updating a book.
 *
 * @param {string} id - The ID of the book to be updated.
 */

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} - Rating: {book.rating}
            <Link to={`/update/${book._id}`}>Update</Link>
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/create">Create Book</Link>
    </div>
  );
}

export default BookList;
