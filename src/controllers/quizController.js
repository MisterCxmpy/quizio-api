const Question = require("../models/Question.js");

const getAllQuestions = (req, res) => {
  let questions = Question.find();

  res.status(200).json(questions);
};

const getQuestionByID = (req, res) => {
  let question = Question.findById(req.params.id);

  res.status(200).json(question);
};

const createQuestion = (req, res) => {
  let { body } = req;

  if (typeof body.question != "string") {
    res.status(422).json({
      error: "incorrect input",
      correctShape: {
        question: "Who was the first president of the United States?",
        choices: [
          "George Washington",
          "Thomas Jefferson",
          "Abraham Lincoln",
          "John F. Kennedy",
        ],
        answer: "George Washington",
      },
    });
  } else {
    let question = Question.save(body);
    res.status(200).json(question);
  }
};

const deleteQuestionByID = (req, res) => {
  let { id } = req.params;
  let q = Question.deleteOne(parseInt(id));

  if (q) {
    res.json(q);
  } else {
    res.json({ error: "question not found" });
  }
};

module.exports = {
  getAllQuestions,
  getQuestionByID,
  createQuestion,
  deleteQuestionByID,
};
