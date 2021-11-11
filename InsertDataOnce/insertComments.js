const Comment = require('../Models/comments');
const Post = require('../Models/posts');

//heleper func
async function getPostIdbyTitle(postTitle) //returns the id of the post by title
{
    const postId = await Post.findOne({title: postTitle})
    return postId._id;
} 
//have to do this otherwise data errors with promise
async function updateData(){
    const data = [
        {
            username : "GoodGuyGreg",
            comment : "Hope you got a good deal!",
            post :  await getPostIdbyTitle("Borrows something")
        },
        {
            username : "GoodGuyGreg",
            comment :" What's mine is yours!",
            post :  await getPostIdbyTitle("Borrows everything")
        },
        {
            username : "GoodGuyGreg",
            comment : "Don't violate the licensing agreement!",
            post : await getPostIdbyTitle("Forks your repo on github")
        },
        {
            username : "ScumbagSteve",
            comment : "It still isn't clean",
            post :  await getPostIdbyTitle("Passes out at party")
        },
        {
            username : "ScumbagSteve",
            comment : "Denied your PR cause I found a hack",
            post :  await getPostIdbyTitle("Reports a bug in your code")
        }
    ]
    return data;
}

const newData = updateData().then(result=>{
    Comment.insertMany(result).then(console.log('Inserted Succesfully')).catch((err)=>{console.log(err)})
})