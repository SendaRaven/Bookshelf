const express = require('express');
const Router = express.Router();
const { createUser, userLogin } = require('../controller/indexController')
//const { check } = require('../middleware/auth')



Router.post('/signup', createUser)
Router.post('/login', userLogin)

module.exports = Router;