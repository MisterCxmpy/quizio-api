const quizRouter = require('express').Router()
const Question = require('../models/Question.js')


//  /q - return stored questions 
quizRouter.get('/', (req, res) => {
    let questions = Question.find();

    res.json(questions)
})

//  /q/:id - return question by id 
quizRouter.get('/:id', (req, res) => {
    let question = Question.findById(req.params.id);

    res.json(question);
})

//  /q/new - create a new quiz room 
quizRouter.get('/new')

//  /q/room/:id - return the data associated to a existing quiz room 
quizRouter.get('/room/:id')

module.exports = quizRouter;