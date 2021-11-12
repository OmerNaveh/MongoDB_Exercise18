const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE).then(console.log("Connected to DB..."));

const QuestionSchema = mongoose.Schema({
    title:String,
    correctAnswer:String,
    answers:[{type:String}],
    difficulty: Number
})

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;