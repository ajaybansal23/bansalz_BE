const passport = require("passport");

const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("user is authenticated");
    next();
  } else {
    console.log("user is not authenticated");
    res.status(401);
    res.send({ message: "user is not authenticated" });
  }
};

const passportGoogleAuthenticationScope = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const passportAuthenticate = passport.authenticate("google", {
  successRedirect: "/auth/login/success",
  failureRedirect: "/auth/login/failed",
});

module.exports = {
  checkAuthentication,
  passportGoogleAuthenticationScope,
  passportAuthenticate,
};
