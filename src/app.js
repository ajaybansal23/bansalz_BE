const express = require('express')
const app = express()
var router = express.Router();
var cors = require('cors');
const checkJwt = require("./middleware/auth");

const port = 5000
app.use(cors());

// This route doesn't need authentication
app.get('/api/public', (req, res) => {
    res.json({
      message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    });
});

app.get('/api/secure/home', checkJwt, (req, res) => {
    res.json({
      message: 'Hello from a secure endpoint! You are authenticated to see this.'
    });
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})