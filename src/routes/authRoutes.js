const authRouter = require("express").Router();

const { logOut, signIn, signUp } = require("../controllers/authController.js");

//  POST /auth/signup - create a new user
authRouter.post("/signup", signUp);

// POST /auth/login - return the data associated to all quiz rooms -- TEST
authRouter.post("/login", signIn);

// GET /auth/:id - return the data associated to a existing quiz room
authRouter.get("/logout", logOut);

module.exports = authRouter;
