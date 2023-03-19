const User = require("../models/User.js");

const signUp = async (req, res) => {
  const { body } = req;
  if (!body.password || !body.username || !body.email) {
    return res.json({ error: "incorrect input" });
  }

  try {
    const usr = new User(body.email, body.username, body.password, "user");

    let hashed = await User.hashPassword(usr.password);

    usr.password = hashed;
    usr.save();

    console.log("Cookies: ", req.cookies); // verifiying if cookie-parser is working

    return res.status(200).json({ ...usr });
  } catch (error) {
    return res.json({ error });
  }
};

const signIn = async (req, res) => {
  const { body } = req;
  if (!body.password || !body.username) {
    return res.json({ error: "incorrect input" });
  }

  let user = User.findByUsername(body.username);

  if (user) {
    let valid = await User.comparePassword(body.password, user.password);

    if (valid) {
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
