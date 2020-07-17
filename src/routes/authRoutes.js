const passport = require('passport');

module.exports = (app) => {
    app.get('/api/auth/google', passport.authenticate("google", {
        scope: ["profile", "email"]
    }))

    app.get('/secure/home', passport.authenticate("google"))
}