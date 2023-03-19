const authRouter = require("express").Router();

const { logOut, signIn, signUp, showUsers } = require("../controllers/authController.js");
const requireAuth = require("../middleware/authMiddleware.js");

//  POST /auth/signup - create a new user
authRouter.post("/signup", signUp);

// POST /auth/login - sign in on post request
authRouter.post("/login", signIn);

// GET /auth/logout - clear auth jwt token of user
authRouter.get("/logout", logOut);

// GET /auth/users - show all users in the temp db -- OBVIOUSLY TEMP
authRouter.get("/users", requireAuth, showUsers);

module.exports = authRouter;
