'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,   // validate
        maxlength: 30,  // validate
        trim: true      // sanitize
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    contact: {
        name: {
            firstName: {
                type: String/* ,
                required: true */
            },
            lastName: {
                type: String/* ,
                required: true */
            },
        },
        birthday: Date,
        address: {
            street: {
                name: {
                    type: String/* ,
                    required: true */
                },
                number: {
                    type: Number/* ,
                    required: true */
                },
            },
            city: {
                type: String/* ,
                required: true */
            },
            zipCode: {
                type: Number/* ,
                required: true */
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 6,
            max: 256
        },
        phone: {
            type: String,
            /* required: true, */
            minlength: 6,
            maxlength: 20
        },
    },
    borrowedBooks: {
        type: Array,
        default: []
    },
    openFees: {
        type: Array,
        default: []
    },
})

module.exports = mongoose.model('User', UserSchema, 'Users');