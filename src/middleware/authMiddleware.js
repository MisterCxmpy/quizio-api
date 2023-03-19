const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.sign(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if(err) {
            console.log(err.message);
            return res.status(401).json({ error: err.message });
        };

        // u have access to that decodedToken here idk what u do with it but still
        next()
    });

  } else {
    return res.status(401).json({ error: "Unauthorised" });
  }
};

module.exports = requireAuth;