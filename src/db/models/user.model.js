const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    email: String,
    firstName: String,
    lastName: String,
    profilePic: String,
    status: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;