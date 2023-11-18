/*
  Filename: AuthContollers.js
  Student's Name: Rahul Gupta
  Student ID: 200553568
  Date: November 16, 2023
*/

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');

const authController = {
  registerUser: async (req, res) => {
    try {
      let user = await User.findOne({ username: req.body.username });
      if (user) {
        return res.status(400).json({ username: 'Username already exists' });
      }
      
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });
      
      // Hash password before saving in database
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);

      user = await newUser.save();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  loginUser: async (req, res) => {
    const { username, password } = req.body;
    
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ username: 'User not found' });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ password: 'Password incorrect' });
      }
      
      const payload = { id: user.id, username: user.username };
      const token = jwt.sign(payload, keys.jwtSecret, { expiresIn: 3600 });
      
      res.json({
        success: true,
        token: 'Bearer ' + token
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = authController;
