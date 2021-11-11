const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE).then(console.log("Connected to DB..."));

const CommentSchema = mongoose.Schema({
    username:String,
    comment:String,
    post: mongoose.Schema.ObjectId
})

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;