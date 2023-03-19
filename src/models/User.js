const users = require("../config/users.json");
const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");

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

  static async hashPassword(password) {
    const salt = await bcrypt.genSalt();

    try {
      let hashed = bcrypt.hash(password, salt);
      return hashed;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async comparePassword(password, hashedPw) {
    let valid = await bcrypt.compare(password, hashedPw);

    return valid;
  }

  save() {
    let usr = users.find((u) => u.username === this.username)
    if (usr) {
      throw new Error("username already exists");
    }

    this.userID = nanoid(5);

    users.push(this);
  }
}

module.exports = User;
