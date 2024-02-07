const express = require("express")
 , app = express()
 , cors = require('cors')
 , auth = require('./auth')
 , routes = require('./routes')
 , helmet = require('helmet')
 

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

auth(app)

app.use(routes)

app.listen(8000, ()=> console.log("Capstone is functioning on port 8000...."))

module.exports = app