const express = require('express');
const Router = express.Router();
const bookController = require('../controller/bookController')

Router.get('/', bookController.books);

module.exports = Router;