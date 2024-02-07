process.env.NODE !== 'production' && require('dotenv').config()

const mongoose = require('mongoose')
    , MONGO_URI = process.env.MONGO_URI

mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Mongoose may be working...'))