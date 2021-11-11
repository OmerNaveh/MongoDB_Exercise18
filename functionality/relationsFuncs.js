const User = require('../Models/users')
const Post = require('../Models/posts')
const Comment = require('../Models/comments');

async function getAllUsers(){
    const users = await User.find({});
    return users;
} 
async function getAllPosts(){
    const posts = await Post.find({});
    return posts;
} 
async function getAllPostsByUserName(userName){
    const posts = await Post.find({username: userName});
    return posts;
} 
//  you can get either users posts by inserting username argument to this function 
// getAllPostsByUserName('GoodGuyGreg');
// getAllPostsByUserName('ScumbagSteve');

async function getAllComments(){
    const comments = await Comment.find({});
    return comments;
} 
async function getAllCommentsByUserName(userName){
    const comments = await Comment.find({username: userName});
    return comments;
} 
//  you can get either users Comments by inserting username argument to this function 
// getAllCommentsByUserName('GoodGuyGreg');
// getAllCommentsByUserName('ScumbagSteve');

async function findCommentsToSpecificPost(postTitle){
    const PostId = (await Post.findOne({title: postTitle})).id   //gets the post id by title
    const comments = await Comment.find({post: PostId});      // get comments that are related to that post
    return comments
}
// findCommentsToSpecificPost("Reports a bug in your code") - task was to return comments related to this specific post title