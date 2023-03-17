const quizRouter = require("express").Router();
const {
  getAllQuestions,
  getQuestionByID,
} = require("../controllers/quizController.js");

//  /q - return stored questions
quizRouter.get("/", getAllQuestions);

//  /q/:id - return question by id
quizRouter.get("/:id", getQuestionByID);

module.exports = quizRouter;
