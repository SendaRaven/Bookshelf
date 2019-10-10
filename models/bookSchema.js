'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    information: {
        title: {
            type: String,
            required: true
        },
        author: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        },
        publication: {
            type: Date,
            required: true
        },
        summary: String
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Book', bookSchema, "Books");