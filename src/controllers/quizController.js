const Question = require('../models/Question.js')

const getAllQuestions = (req, res) => {
    let questions = Question.find();

    res.status(200).json(questions)
}

const getQuestionByID = (req, res) => {
    let question = Question.findById(req.params.id);

    res.status(200).json(question);
}

module.exports = { getAllQuestions, getQuestionByID }