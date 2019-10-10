'use strict';

const express = require('express');

const app = express();

const bookRouter = require('./routes/bookRouter');
const usersRouter = require('./routes/userRouter');
const auth = require('./middleware/auth')
const errorMiddleware = require('./middleware/error');
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/bookshelf', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
// attach listeners to the db connection
db.on('error', console.error)

db.once('open', function () {
  console.log(`We're connected over http://127.0.0.1:27017/bookshelf!`);

})

app.listen(port, () => { console.log(`Express is running on port ${port}!`) })

app.use('/api/user/', express.json(), usersRouter, errorMiddleware.handler);
app.use('/api/books/', express.json(), bookRouter, errorMiddleware.handler);

