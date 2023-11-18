/*
  Filename: AuthRoutes.js
  Student's Name: Rahul Gupta
  Student ID: 200553568
  Date: November 16, 2023
*/

const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthControllers');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;
