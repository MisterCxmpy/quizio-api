const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

// 3 hours in seconds
const maxAge = 3 * 3600;
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const signUp = async (req, res) => {
  const { body } = req;
  if (!body.password || !body.username || !body.email) {
    return res.json({ error: "incorrect input" });
  }

  try {
    const usr = new User(body.email, body.username, body.password, "user"); // default sign up for user role (different endpoint for admin signup?)

    // hash user password and save
    let hashed = await User.hashPassword(usr.password);
    usr.password = hashed;
    usr.save();

    // create and add jwt
    const token = generateToken(usr.userID);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }); // 3 hrs in miliseconds

    return res.status(201).json({ ...usr, password: null });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  const { body } = req;
  if (!body.password || !body.username) {
    return res.json({ error: "incorrect input" });
  }
  // look for user
  let user = User.findByUsername(body.username);

  if (user) {
    // if user exists
    // compare the password to the body.input
    let valid = await User.comparePassword(body.password, user.password);

    if (valid) {
      // create and add jwt
      const token = generateToken(user.userID);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }); // 3 hrs in miliseconds

      return res.status(200).json({ ...user, password: null });
    } else {
      return res.status(401).json({ error: "incorrect credentials" });
    }
  } else {
    return res.status(404).json({ error: "user credentials not found" });
  }
};

const logOut = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json({ status: "logged out" });
};

module.exports = { signIn, signUp, logOut };
