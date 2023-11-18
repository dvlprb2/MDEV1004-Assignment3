/*
  Filename: Login.js
  Student's Name: Bittu Patel
  Student ID: 200556453
  Date: November 16, 2023
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import BookList from './components/BookList';
import CreateBookForm from './components/CreateBookForm';
import UpdateBookForm from './components/UpdateBookForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/create" element={<CreateBookForm />} />
        <Route path="/update/:id" element={<UpdateBookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
