const passport = require('passport');

module.exports = (app) => {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/auth/google', passport.authenticate("google", {
        scope: ["profile", "email"]
    }), (req, res, next) => {

    });

    app.get('/api/auth/google/redirect', passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
        console.log("sending response to ----> UI");
        // req.app.set('user', res.req.user)
        res.cookie('cookieName', 'cookieValue');
        res.cookie('userID', res.req.user._id);
        return res.redirect(`/secure/home`);
    });

    app.get('/api/secure/ceremonies', passport.authenticate('google'), (req, res) => {
        console.log("sending response to ----> UI");
        // req.app.set('user', res.req.user)
        res.send({ name: "Ajay" });
    });
};