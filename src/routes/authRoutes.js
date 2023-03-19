const authRouter = require("express").Router();

const { logOut, signIn, signUp } = require("../controllers/authController.js");

//  POST /auth/signup - create a new user
authRouter.post("/signup", signUp);

// POST /auth/login - sign in on post request
authRouter.post("/login", signIn);

// GET /auth/logout - clear auth jwt token of user
authRouter.get("/logout", logOut);

module.exports = authRouter;
