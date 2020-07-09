const express = require('express')
const app = express()
var router = express.Router();
const checkJwt = require("./middleware/auth");

const port = 5000

router.get('/secure/ceremonies', checkJwt, (req, res) => {
    res.send({ message: 'User is authenticated and has access to ceremonies' })
})

app.use('/', router);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})