/*
  Filename: Register.js
  Student's Name: Rahul Gupta
  Student ID: 200553568
  Date: November 16, 2023
*/

import React, { useState } from 'react';
import { authService } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(userData);
      navigate('/login'); // Redirect to login after registration
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
