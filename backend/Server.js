/*
  Filename: Server.js
  Student's Name: Bittu Patel
  Student ID: 200556453
  Date: November 16, 2023
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const bookRoutes = require('./routes/BookRoutes');
const authRoutes = require('./routes/AuthRoutes');
const key = require('./config/keys');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(key.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/Passport')(passport);

// Use Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
