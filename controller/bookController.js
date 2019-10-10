'use strict';

// const Book = require('../models/bookModel');
// const address = require('../models/address')
// const validator = require('validator');
const createError = require('http-errors');

function books(req, res, next) {
    // Book.find({}, function (err, books) {
    //     if (err) {
    //         next(createError(400, err));
    //     }
    //     res.send(books)
    // })
    res.send("a lot of books")
}

module.exports = {
    books: books,
}