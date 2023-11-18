/*
  Filename: BookList.js
  Student's Name: Bittu Patel
  Student ID: 200556453
  Date: November 16, 2023
*/

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/books'; 

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `${localStorage.getItem('token')}`
  }
});

export const bookService = {
  getAllBooks() {
    return axiosInstance.get('/');
  },
  getBook(id) {
    return axiosInstance.get(`/${id}`);
  },
  createBook(bookData) {
    return axiosInstance.post('/', bookData);
  },
  updateBook(id, bookData) {
    return axiosInstance.put(`/${id}`, bookData);
  },
  deleteBook(id) {
    return axiosInstance.delete(`/${id}`);
  }
};
