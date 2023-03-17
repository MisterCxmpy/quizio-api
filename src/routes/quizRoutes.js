const quizRouter = require("express").Router();
const {
  getAllQuestions,
  getQuestionByID,
  createQuestion
} = require("../controllers/quizController.js");

//  /q - return stored questions
quizRouter.get("/", getAllQuestions);

// /q/new - create new question
quizRouter.post("/new", createQuestion);

//  /q/:id - return question by id
quizRouter.get("/:id", getQuestionByID);

module.exports = quizRouter;
