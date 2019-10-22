const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');
const userAuth = require("../middleware/auth")
Router.get('/'/* , userAuth.check */, userController.fetchUser); //parameter are not allowed and authorithation is needed
// Router.post('/borrow', userController.borrowBook);
// Router.post('/return',userController.returnBook);
// Router.put('/', userAuth.check, userController.updateUser);
Router.delete('/'/* , userAuth.check */, userController.deleteUser)


module.exports = Router;