'use strict';

const Book = require('../models/bookSchema');
// const address = require('../models/address')
// const validator = require('validator');
const createError = require('http-errors');

function books(req, res, next) {
    Book.find({}, function (err, books) {
        if (err) {
           return next(createError(400, err));
        }
        res.send(books)
    })
    //res.send({x:"a lot of books"})
}

module.exports = {
    books: books,
}