const express = require('express');
const Router = express.Router();
const bookController = require('../controller/bookController')

Router.get('/', bookController.books);
Router.post('/', bookController.booksearch);

module.exports = Router;