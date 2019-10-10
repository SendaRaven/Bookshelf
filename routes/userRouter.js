const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router.get('/', userController.users);
Router.post('/', userController.createUser)

module.exports = Router;