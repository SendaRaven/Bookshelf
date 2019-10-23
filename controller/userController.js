'use strict';

const Users = require('../models/userSchema');
// const validator = require('validator');
const createError = require('http-errors');
const { create } = require('../middleware/auth')



async function fetchUser(req, res, next) {
    console.log(req.user._id);
    const userID = await req.user._id;

    try {
        Users.findOne({ _id: userID }, function (err, user) {
            if (err) {
                return next(createError(500, err.message))
            }

            res.send(user.contact)
        })
    } catch (error) {
        () => res.send(error.message)
    }

}

async function deleteUser(req,res,next) {
    console.log(req.user._id);
    const userID = await req.user._id;

    try {
        Users.deleteOne({ _id: userID }, function (err, user) {
            if (err) {
                return next(createError(500, err.message))
            }

            res.sendStatus(200)
        })
    } catch (error) {
        () => res.send(error.message)
    }

}

module.exports = {
    fetchUser: fetchUser,
    // borrowBook: borrowBooks,
    // returnBook: returnBook,
    // updateUser: updateUser,
    deleteUser: deleteUser
}