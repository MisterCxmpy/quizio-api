let questions = require("../config/questions.json");

class Question {
  constructor(question, choices, answer) {
    this.questionID = undefined;
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  static find() {
    return questions;
  }

  static findById(id) {
    let question = questions.find((q) => q.questionID == id);

    if (question) {
      return new Question(question);
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

    return q;
  }

  static deleteOne(id) {
    let idx = questions.findIndex(q => q.questionID === id);

    if(idx < 0) {
      return { error: 'question not found' }
    }else {
      return questions.splice(idx, 1)
    }
  }
}

module.exports = Question;
