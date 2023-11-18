/*
  Filename: User.js
  Student's Name: Sinthuvamsan Viswarupan
  Student ID: 200557495
  Date: November 16, 2023
*/

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
