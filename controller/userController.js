'use strict';

const Users = require('../models/userSchema');
// const validator = require('validator');
const createError = require('http-errors');

function users(req, res, next) {
    // Users.find({}, function (err, users) {
    //     if (err) {
    //         next(createError(400, err));
    //     }
    //     res.send(users)
    // })
    res.send("a lot of users")
}

function createUser(req, res, next) {

    let userData = req.body;
    console.log(userData);

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
                let msg = "Internal server error";
                let status = 500;


                if (err.errmsg && err.errmsg.includes("E11000 duplicate key error")) {
                    msg = `error: username ${userData.username} already exists!`;
                    status = 409; // Conflict
                }

                res.status(status);
                res.send(msg);
                return;
            }
            res.send(doc);
        })
    } catch (error) {
        console.log(error);
        next(createError(500, error))
    }
    //res.status(200).send("Input is valid!")
}


module.exports = {
    users: users,
    createUser: createUser
}