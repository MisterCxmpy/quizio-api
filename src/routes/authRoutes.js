const authRouter = require("express").Router();

const { logOut, signIn, signUp } = require("../controllers/authController.js");

//  POST /auth/signup - create a new user
authRouter.post("/signup", signUp);

// POST /auth/login - sign in on post request
authRouter.post("/login", signIn);

// GET /auth/logout - WORK IN PROGRESS https://www.youtube.com/watch?v=muhJTRQ7WMk&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&index=2
authRouter.get("/logout", logOut);

module.exports = authRouter;
