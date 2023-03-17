const questions = require("../config/questions.json");

class Question {
  constructor(prompt, choices, answer) {
    this.questionID = undefined;
    this.prompt = prompt;
    this.choices = choices;
    this.answer = answer;
  }

  static find() {
    return questions;
  }

  static findById(id) {
    let question = questions.find((q) => q.questionID == id);

    if (question) {
      return question;
    } else {
      return { error: "Question not found." };
    }
  }

  static save(question) {
    let q = new Question(question);

    // get the max id in the question arr
    let ids = questions.map((q) => q.questionID);
    let maxID = Math.max(...ids);

    q.questionID = maxID + 1;

    questions.push(q);
  }
}

module.exports = Question;