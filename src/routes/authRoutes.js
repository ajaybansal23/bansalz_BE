const passport = require('passport');

module.exports = (app) => {
    app.get('/api/auth/google', passport.authenticate("google", {
        scope: ["profile", "email"]
    }));

    //callback URL configured in google
    //http://localhost:5000/api/auth/google/redirect
    app.get('/api/auth/google/redirect', passport.authenticate("google"), (req, res) => {
        console.log("sending response to UI");
        res.send(req.user);
    });
};