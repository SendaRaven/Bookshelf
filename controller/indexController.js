'use strict';

const Users = require('../models/userSchema');
// const validator = require('validator');
const createError = require('http-errors');
const { create, check} = require('../middleware/auth')
const jwt = require('jsonwebtoken');

async function userLogin(req, res, next) {
    const username = await req.body.username;
    const password = await req.body.password;

    if (!username || !password) {
        next(createError(401, "Authentication required"))
    }
    try {

        Users.findOne({
            username: username
        }, async function (err, user) {
            if (err) {
               return next(createError(401, err.message))
            }
            if (!user) {
                return next(createError(400, "The username does not exist"));
            
            }
            // console.log(user.password);
            // console.log(await check(password, user.password));
            
            if (await check(password, user.password) === true) {
                let token = jwt.sign(
                    {
                        username: username,
                        _id: user._id
                    },
                    process.env.KEY,
                    { expiresIn: '24h' }
                )
                res.json({ token: token })
            } else {
                return next(createError(401, "Authentication required"))
            }
        })
    } catch (error) {
        return next(createError(401, "Authentication required"))
    }
}


async function createUser(req, res, next) {

    let userData = await req.body;
    console.log(userData.password, userData.username);

    if (!userData.username || !userData.password) {
        next(createError(400, "required fields missing: username, password!"))
        return;
    }

    if (userData.username.length < 3 || userData.username.length > 30) {
        next(createError(400, "Username not valid!"))
        return;
    }
    if (userData.password.length < 6 || userData.password.length > 1024) {
        next(createError(404, "Password not valid!"))
        return;
    }

    let newUser = {
        username: userData.username.trim(),
        password: await create(userData.password.trim()),
        contact: userData.contact,
        borrowedBooks: userData.borrowedBooks,
        openFees: userData.openFees
    }

    console.log(newUser);

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
    userLogin: userLogin,
    createUser: createUser,
}