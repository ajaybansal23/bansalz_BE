const passport = require("passport");
const jwt = require('jsonwebtoken');
const keys = require("../config/keys");

const checkAuthToken = (req, res, next) => {
  try {
    console.log("Verifying the JWT");
    // console.log(req.headers);
    // console.log(req.cookies);
    const token = req.cookies.token;
    // console.log(token);
    const decoded = jwt.verify(token, "secret123");
    console.log("decoded token is " + JSON.stringify(decoded));
    next();

  } catch (e) {
    res.status(401).send({ error: "user is not authenticated" })
  }
};

const generateAuthToken = (req, res, next) => {
  console.log(req.user);
  if (req.user.status === 'NEW') {
    req.token = null;
    next();
  } else if (req.user.status === 'REGISTERED') {
    console.log("Going to generate JWT ....")
    const token = jwt.sign(req.user.toJSON(), keys.jwtSecret, {
      expiresIn: "1h"
    })
    console.log(token);
    req.token = token;
    res.cookie('token', token, {
      httpOnly: true
    })
    next();
  }
  else {
    req.token = null;
    next();
  }
}

const passportGoogleAuthenticationScope = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const passportAuthenticate = passport.authenticate("google", {
  failureRedirect: "/auth/login/failed",
});

module.exports = {
  generateAuthToken,
  // checkAuthentication,
  checkAuthToken,
  passportGoogleAuthenticationScope,
  passportAuthenticate,
};
