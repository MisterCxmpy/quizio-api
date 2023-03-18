const User = require("../models/User.js");

const signUp = (req, res) => {
  const { body } = req;
  if (!body.password || !body.username || !body.email) {
    return res.json({ error: "incorrect input" });
  }

  try {
    const usr = new User(body.email, body.username, body.password, "user");

    usr.save();

    return res.status(200).json({ ...usr, password: null });
  } catch (error) {
    return res.json({ error });
  }
};

const signIn = (req, res) => {
  const { body } = req;
  if (!body.password || !body.username) {
    return res.json({ error: "incorrect input" });
  }

  let user = User.findByUsername(body.username);

  if (user) {
    if (user.password === body.password) {
      return res.status(200).json({ ...user, password: null });
    } else {
      return res.status(401).json({ error: "incorrect credentials" });
    }
  } else {
    return res.status(404).json({ error: "user credentials not found" });
  }
};

const logOut = (req, res) => {
  const { body } = req;

  res.json({ status: "WIP" });
};

module.exports = { signIn, signUp, logOut };
