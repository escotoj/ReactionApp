const { Schema, Types } = require('mongoose')

const userSchema = new Schema(
    // DATA
);

const User = model('user', userSchema)

module.exports = User;