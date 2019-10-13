const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router.get('/:username', userController.user); //parameter are not allowed and authorithation is needed
Router.post('/', userController.createUser);
// Router.put('/', userController.updateUser);
// Router.delete('/', usercontroller.deleteUser)


module.exports = Router;