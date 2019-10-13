'use strict';

const Users = require('../models/userSchema');
// const validator = require('validator');
const createError = require('http-errors');

function user(req, res, next) {
    let searchedName = req.params.username //can not be parameter based
    Users.find({ username: searchedName }, function (err, user) {
        if (err) {
            next(createError(400, err));
        }
        res.send(user)
    })
    //    res.send("a lot of users")
}

function createUser(req, res, next) {

    let userData = req.body;
    //console.log(userData);

    if (!userData.username || !userData.password) {
        next(createError(400, "required fields missing: username, password!"))
        return;
    }

    if (userData.username.length < 3 || userData.username.length > 20) {
        next(createError(400, "Username not valid!"))
        return;
    }
    if (userData.password.length < 6 || userData.password.length > 1024) {
        next(createError(400, "Password not valid!"))
        return;
    }

    let newUser = {
        username: userData.username.trim(),
        password: userData.password.trim()
    }

    try {
        Users.create(newUser, function (err, doc) {
            if (err) {
                console.log("Error!!!", err);

                let msg = "Internal server error";
                let status = 500;


                if (err.errmsg && err.errmsg.includes("E11000 duplicate key error")) {
                    msg = `error: username ${userData.username} already exists!`;
                    status = 409; // Conflict
                }

                res.status(status).send(msg);
                return;
            }

            res.status(200)
            res.send(doc);
            // res.send("Input is valid!")
        })
    } catch (error) {
        console.log("Error2", error);
        next(createError(500, error))
    }

}


module.exports = {
    user: user,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}