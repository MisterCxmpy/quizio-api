const { nanoid } = require('nanoid')

let questionRooms = [];

class QuestionRoom {
  constructor(questions) {
    this.id = undefined;
    this.url = undefined;
    this.questions = questions;
  }

  static find() {
    return questionRooms;
  }

  static save(questions) {
    let qr = new QuestionRoom(questions);

    // get the max id in the question room arr
    let ids = questionRooms.map((qr) => qr.id);
    let maxID = Math.max(...ids);

    qr.id = maxID + 1;
    qr.generateUrl();

    questionRooms.push(qr);

    return qr;
  }

  generateUrl() {
    this.url = nanoid();
    return this.url;
  }

  shuffle() {
    let shuffled = this.questions.sort(() => Math.random() - Math.random());
    return shuffled;
  }
}

module.exports = QuestionRoom;
