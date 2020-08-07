const passport = require('passport');

const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("user is authenticated")
        next();
    } else {
        console.log("user is not authenticated")
        res.status(401);
        res.send({ message: "user is not authenticated" });
    }
}

module.exports = (app) => {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/auth/google', passport.authenticate("google", {
        scope: ["profile", "email"]
    }), (req, res, next) => {
        console.log("over to google now....")

    });

    app.get('/api/auth/google/redirect', passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
        console.log("got redirect back from google..and user is authenticated successfully")

        console.log("sending response to ----> UI");
        // req.app.set('user', res.req.user)
        res.cookie('cookieName', 'cookieValue');
        res.cookie('userID', res.req.user._id);
        return res.redirect(`/secure/home`);
    });

    app.get('/api/secure/ceremonies', checkAuthentication, (req, res) => {
        console.log("sending response to ----> UI");
        // req.app.set('user', res.req.user)
        res.send({ name: "Ajay" });
    });

    app.get('/api/secure/logout', checkAuthentication, (req, res) => {
        req.logout();
        res.status(200);
        res.send();
    });

    app.get('/api/secure/authentication', checkAuthentication, (req, res) => {
        console.log("authentication is success. Now returning user object")
        res.status(200);
        res.send({ user: req.user });
    });
};