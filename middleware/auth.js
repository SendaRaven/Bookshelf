const createError = require('http-errors');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();


async function createAuth(clear) {
    console.log(clear);

    const salt = await bcrypt.genSalt(10);
    console.log(salt);

    const hashedPassword = await bcrypt.hash(clear, salt)
    console.log(hashedPassword);

    return hashedPassword;
}

async function checkAuth(req) {
    const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
    if (!passwordsMatch) {
        return createError(400, 'email or password incorrect.')
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY);

    res.header('auth-token', token).send('You are logged in');
}


module.exports = {
    create: createAuth,
    check: checkAuth
}