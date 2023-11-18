/*
  Filename: AuthService.js
  Student's Name: Sinthuvamsan Viswarupan
  Student ID: 200557495
  Date: November 16, 2023
*/

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/'; 

export const authService = {
  register(data) {
    return axios.post(API_URL + 'register', data);
  },
  login(data) {
    return axios.post(API_URL + 'login', data).then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
  },
  logout() {
    localStorage.removeItem('user');
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
};
