const users = require("../config/users.json");
const { nanoid } = require('nanoid')

class User {
  constructor(email, username, password, role) {
    this.userID = null;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
  }

  static findByID(userID) {
    let user = users.find((u) => u.userID == userID);

    return user;
  }

  static findByEmail(userEmail) {
    let user = users.find((u) => u.email == userEmail);

    return user;
  }

  static findByUsername(username) {
    let user = users.find((u) => u.username == username);

    return user;
  }

  save() {
    if (users.find((u) => u.username === this.username).length) {
      throw new Error("username already exists");
    }

    this.userID = nanoid(5);

    users.push(this);
  }
}

module.exports = User;
