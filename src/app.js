const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

//Init in the following Order
// 1. cookieParser
// 2. session
// 3. passport.initialize
// 4. passport.session
// 5. app.router

app.use(cors());

app.use(cookieSession({
    //1 day in seconds
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

require('./services/passport');
require('./routes/authRoutes')(app);

//connect to Mongodb
const connectionURL = `mongodb+srv://${keys.mongodb.userName}:${keys.mongodb.password}@${keys.mongodb.cluster}.mongodb.net/${keys.mongodb.database}?retryWrites=true&w=majority`;

console.log(connectionURL);
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected to mongodb");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});