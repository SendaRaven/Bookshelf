'use strict';

const Users = require('../models/userSchema');
// const validator = require('validator');
const createError = require('http-errors');
const { create, check } = require('../middleware/auth')
const jwt = require('jsonwebtoken');

async function userLogin(req, res, next) {
    const email = await req.body.email;
    const password = await req.body.password;

    if (!email || !password) {
        return next(createError(401, "0 Authentication required"))
    }
    try {

        Users.findOne({
            "contact.email": email
        }, async function (err, user) {
            console.log(user);

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
                        email: email,
                        _id: user._id
                    },
                    process.env.KEY,
                    { expiresIn: '24h' }
                )
                res.json({ token: token })
            } else {
                return next(createError(401, "1 Authentication required"))
            }
        })
    } catch (error) {
        return next(createError(401, "2 Authentication required"))
    }
}


async function createUser(req, res, next) {

    let userData = await req.body;
    console.log("recived Data", userData.password, userData.username, userData.email);

    if (!userData.username || !userData.password) {
        console.log(500, "required fields missing: username, password!");
        return next(createError(500, "required fields missing: username, password!"))


    }

    if (userData.username.length < 3 || userData.username.length > 30) {
        console.log(500, "Username not valid!");
        return next(createError(400, "Username not valid!"))

    }
    if (userData.password.length < 6 || userData.password.length > 1024) {
        console.log(409, "Password not valid!");
        return next(createError(400, "Password not valid!"));
    }

    let newUser = {
        username: userData.username.trim(),
        password: await create(userData.password.trim()),
        contact: {
            email: userData.email.trim()
        },
        borrowedBooks: userData.borrowedBooks,
        openFees: userData.openFees
    }

    console.log("newUser", newUser);

    try {
        Users.create(newUser, function (err, doc) {
            if (err) {
                console.log("Error!!!", err);

                let msg = "Internal server error";
                let status = 500;


                if (err.errmsg && err.errmsg.includes("E11000 duplicate key error")) {
                    console.log("Database Error", err.keyValue);
                    let errorArray = Object.entries(err.keyValue)
                    console.log(errorArray);

                    msg = `The ${errorArray[0][0]} ${errorArray[0][1]} already exists!`;
                    status = 409; // Conflict
                }
                return next(createError(status, msg));
                //res.status(status).send(msg);
            }

            res.status(200).send(doc);
            // res.send("Input is valid!")
        })
    } catch (error) {
        console.log("Error2", error);
        return next(createError(500, error));
    }

}


module.exports = {
    userLogin: userLogin,
    createUser: createUser,
}