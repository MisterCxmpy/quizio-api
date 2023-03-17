const quizRouter = require('express').Router()
const { getAllQuestions, getQuestionByID } = require('../controllers/quizController.js')


//  /q - return stored questions 
quizRouter.get('/', getAllQuestions)

//  /q/:id - return question by id 
quizRouter.get('/:id', getQuestionByID)

//  /q/new - create a new quiz room 
quizRouter.get('/new')

//  /q/room/:id - return the data associated to a existing quiz room 
quizRouter.get('/room/:id')

module.exports = quizRouter;