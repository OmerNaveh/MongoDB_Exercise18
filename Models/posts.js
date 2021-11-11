const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE).then(console.log("Connected to DB..."));

const PostSchema = mongoose.Schema({
    username:String,
    title:String,
    body: String
})

const Post = mongoose.model('post', PostSchema);
module.exports = Post;