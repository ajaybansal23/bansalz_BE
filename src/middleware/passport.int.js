const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const util = require("util");
const User = require("../db/models/user.model");

passport.serializeUser((user, done) => {
  console.log("Serializing User now!!!!!");
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  console.log("DE-Serializing User now!!!!!");

  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/api/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Checking if user exists in DB");
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("User Already Exists" + currentUser);
          //This will call serialize
          done(null, currentUser);
        } else {
          const userObj = {
            username: profile._json.name,
            googleId: profile._json.sub,
            email: profile._json.email,
            firstName: profile._json.given_name,
            lastName: profile._json.family_name,
            profilePic: profile._json.picture,
            status: "NEW"
          };

          new User(userObj).save().then((newUser) => {
            console.log("New User Created" + newUser);

            //This will call serialize
            done(null, newUser);
          });
        }
      });
    }
  )
);