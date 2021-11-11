const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE).then(console.log("Connected to DB..."));

const UserSchema = mongoose.Schema({
    username:String,
    first_name:String,
    last_name: String
})

const User = mongoose.model('user', UserSchema);
module.exports = User;