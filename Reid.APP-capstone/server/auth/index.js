process.env.NODE_ENV !== "production" &&
    require('dotenv').config()

const session = require("express-session")
const MongoStore = require("connect-mongo")
const passport = require("passport")

module.exports = function (app) {
    app.use(
        session({
            store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
            secret: process.env.SESSION_SECRET,
            resave: true,
            saveUninitialized: true,
            cookie: { secure: false },
            key: 'express.sid',
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    require("./strategy")(passport)
}