const { nanoid } = require("nanoid");

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

  static findByURL(url) {
    let room = questionRooms.find(r => r.url == url);

    return room;
  }

  static save(questions) {
    let qr = new QuestionRoom(questions);

    let maxID;
    if (questionRooms.length == 0) {
      maxID = 0;
    } else {
      let ids = questionRooms.map((qr) => qr.id);
      maxID = Math.max(...ids);
    }

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
