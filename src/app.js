const express = require('express')
var router = express.Router()
var cors = require('cors');
const app = express()
app.use(cors());

require('./services/passport')
require('./routes/authRoutes')(app)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})