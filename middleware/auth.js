const createError = require('http-errors');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();


async function createAuth(clear) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(clear, salt)

    return hashedPassword;
}

async function checkAuth(password, userPassword) {
    try {
        const passwordsMatch = await bcrypt.compare(password, userPassword)
        if (!passwordsMatch) {
            return createError(400, 'email or password incorrect.')
        }
        return passwordsMatch
    } catch (error) {
        () => res.send("in auth.js", error.message)
    }
    
}


module.exports = {
    create: createAuth,
    check: checkAuth
}