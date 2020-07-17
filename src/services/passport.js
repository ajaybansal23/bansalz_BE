const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const util = require('util')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/secure/home'
}, (accessToken, refreshToken, profile, done) => {
    console.log("accessToken: " + accessToken);
    console.log("refreshToken: " + refreshToken);
    console.log(util.inspect(profile, false, null, true /* enable colors */))

}))