const { nanoid } = require("nanoid");

let questionRooms = [];

class QuestionRoom {
  constructor(questions) {
    this.id = null;
    this.url = null;
    this.questions = questions;
  }

  static find() {
    return questionRooms;
  }

  static findByURL(url) {
    let room = questionRooms.find((r) => r.url == url);

    return room;
  }

  save() {
    this.id = nanoid(4);
    this.generateUrl();

    questionRooms.push(this);
  }

  static deleteOne(id) {
    let idx = questionRooms.findIndex((qr) => qr.id === id);

    if (idx < 0) {
      return { error: "question not found" };
    } else {
      return questionRooms.splice(idx, 1);
    }
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
