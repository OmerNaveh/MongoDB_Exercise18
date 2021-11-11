const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE).then(console.log("Connected to DB..."));

const StudentSchema = mongoose.Schema({
    name:String,
    surName:String,
    birth:Date,
    phone:String,
    gender:String,
    courses: [{type:String}]
})

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;