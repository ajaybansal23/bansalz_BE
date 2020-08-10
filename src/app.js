const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const mongoose = require("./db/connection/mongodb.connect");

const app = express();
//Init in the following Order
// 1. cookieParser
// 2. session
// 3. passport.initialize
// 4. passport.session
// 5. app.router

//middleware to log HTTP
app.use(morgan('dev'));

app.use(cors());
app.use(cookieParser("testsecret"));

app.use(
  session({
    secret: keys.session.cookieKey,
    resave: false,
    saveUninitialized: false,
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

///use body parser
app.use(bodyParser.urlencoded({extended: true}));

//set the routes
app.use(require('./routes/login.routes'));
app.use(require('./routes/application.routes'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
