const LocalStrategy = require("passport-local")
const bcrypt = require("bcryptjs")
const User = require("../db/models").User

module.exports = passport => {
  passport.serializeUser((user, done) => {

    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User
      .findById(id)
      .then(doc => {
        // console.log("DOC ", doc)
        done(null, doc)
      })
      .catch(err => console.log(err))
  })

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User
        .findOne({ email })
        .then(user => {
          if (!user) {
            return done(null, false)
          }
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false)
          }
          return done(null, user)
        })
        .catch(err => console.log(err))
    })
  )
}