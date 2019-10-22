'use strict';

const express = require('express');
const app = express();

const path = require('path');
const indexRouter = require('./routes/indexRouter')
const bookRouter = require('./routes/bookRouter');
const usersRouter = require('./routes/userRouter');
const errorMiddleware = require('./middleware/error');
const jwt = require('express-jwt')


/*
** serves all the static files in the /public directory in the project root
*/
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use(jwt({ secret: process.env.KEY }))
app.use('/user/', usersRouter);
app.use('/books/', bookRouter);

app.use(errorMiddleware.handler)
module.exports = app;
