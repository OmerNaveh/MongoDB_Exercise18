const express = require("express");
const app = express();
const Question = require("./Models/questions");
const errorHandler = require('./middleware/errorHandler')
app.use(express.json());  // in order to read body from requests
const Port = 8000;
app.listen(Port, ()=>{console.log('server running..')})

app.get('/list', async(req,res)=>{  //return all questions from DataBase
    const allQuestions = await Question.find({});
    res.json(allQuestions);
})
app.get('/read/by/difficulty/:difficulty', async(req,res)=>{ //return questions by difficulty from DataBase
    const wantedDifficulty = req.params.difficulty;
    const wantedQuestions = await Question.find({difficulty: wantedDifficulty});
    res.json(wantedQuestions);
})
app.post('/create', async (req,res,next)=>{ //adds question to the array
    try{
        const qustionsDet = req.body;
        if(!qustionsDet.difficulty || !qustionsDet.title || !qustionsDet.correctAnswer){throw "missing info"} //validation for fields
        if(!qustionsDet.answers ||!qustionsDet.answers.includes(qustionsDet.correctAnswer)){throw "answers Array is invalid"} //validtaion for array field
        await Question.insertMany(qustionsDet)
        res.send('question added successfully')
    }catch(error){
        next(error);
    }
})
app.delete('/remove/:id', async(req,res,next)=>{
    try {
        const inputId = req.params.id;
        const validateExist = await Question.findById(inputId); //this validate that the id exists - if it doesnt this throws an error and leadt to errorhandler
        await Question.deleteOne({_id: inputId})
        res.send('Question deleted Successfully')
    } catch (error) {
        next(error)
    }
})
app.put('/update/:id', async (req,res,next)=>{
    try {
        const inputId = req.params.id;
        const updateData = req.body;
        if(!updateData.difficulty || !updateData.title || !updateData.correctAnswer){throw "missing info"} //validation for fields
        if(!updateData.answers ||!updateData.answers.includes(updateData.correctAnswer)){throw "answers Array is invalid"} //validtaion for array field
        await Question.updateOne({_id:inputId}, updateData) //if the id doesnt exist in DB an error will be thrown to errorHandler
        res.send('Updated Successfully')
    } catch (error) {
        next(error)
    }
})
app.use(errorHandler);