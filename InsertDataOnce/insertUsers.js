const User = require('../Models/users');
const data = [
    {
        username : "GoodGuyGreg",
        first_name : "Good Guy",
        last_name : "Greg"
    },
    {
        username : "ScumbagSteve",
        first_name : "Scumbag",
        last_name : "Steve"
        
    }
]

User.insertMany(data).then(console.log('Inserted Succesfully')).catch((err)=>{console.log(err)})