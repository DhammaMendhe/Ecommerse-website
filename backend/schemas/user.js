const mongoose = require('mongoose');
// const { type } = require('os');
const { use } = require('../Routes/authen');
const { Schema } = mongoose; 

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true },
    createtimedate: { type: Date, default: Date.now }

})

const User = mongoose.model('ecomUser',userSchema);
User.createIndexes();

module.exports = User;