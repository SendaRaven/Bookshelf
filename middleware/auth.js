const createError = require('http-errors');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();


function createAuth(req) {
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(req.body.password, salt)
    return hashedPassword;
}

function checkAuth(req) {
    const passwordsMatch = bcrypt.compare(req.body.password, user.password)
    if (!passwordsMatch) {
        return createError(400,'email or password incorrect.')
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY);

    res.header('auth-token', token).send('You are logged in');
}


module.exports = {
    create: createAuth,
    check: checkAuth
}