const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');
const userAuth = require("../middleware/auth")
Router.get('/:username', /* userAuth.check, */ userController.user); //parameter are not allowed and authorithation is needed
Router.post('/', userController.createUser);
// Router.put('/', userAuth.check, userController.updateUser);
// Router.delete('/', userAuth.check, userController.deleteUser)


module.exports = Router;