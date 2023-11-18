/*
  Filename: BookRoutes.js
  Student's Name: Charvi Parhawk
  Student ID: 200557117
  Date: November 16, 2023
*/

const express = require('express');
const bookController = require('../controllers/BookControllers');
const passport = require('passport');
const router = express.Router();

// Protecting the routes with Passport JWT
router.post('/', passport.authenticate('jwt', { session: false }), bookController.createBook);
router.get('/', passport.authenticate('jwt', { session: false }), bookController.getAllBooks);
router.get('/:id', passport.authenticate('jwt', { session: false }), bookController.getBook);
router.put('/:id', passport.authenticate('jwt', { session: false }), bookController.updateBook);
router.delete('/:id', passport.authenticate('jwt', { session: false }), bookController.deleteBook);

module.exports = router;
