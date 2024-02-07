const User = require('../db/models').User
    , Pet = require('../db/models').Pet
    , bcryptjs = require('bcryptjs')
    , passport = require('passport')

module.exports = {
    ensureAuthenticated: (req, res, next) => {
        return req.isAuthenticated() ?
            next()
            :
            res.json({ message: 'Not an authenticated user.' })
    },
    regUser: (req, res) => {
        let { pw1, pw2, firstName, lastName, email } = req.body
        let user = Object.assign({}, { firstName, lastName, email })

        return pw1 !== pw2 ?
            res.json({ message: "Enter matching passwords." })
            :
            (email === 'admin' && pw1 === 'password' && pw2 === 'password') ?
                User
                    .findOne({ email })
                    .then(data => {
                        user.password = bcryptjs.hashSync(pw1, 10)
                        let newUser = new User(user)

                        !data ?
                            newUser
                                .save()
                                .then(user => {
                                    req
                                        .login(user, err => {
                                            err ?
                                                console.log(err)
                                                :
                                                res
                                                    .status(200)
                                                    .json({ message: "User logged in...", user })
                                        })
                                })
                                .catch(err => console.log(err))
                            :
                            res.json({ message: `email is already registered.` })
                    })
                    .catch(err => console.log(err))
                :
                (pw1.match(/[a-z]+/) && pw1.match(/[0-9]+/) && pw1.match(/[A-Z]+/) && pw1.match(/\W+/) && pw1.length >= 8) ?
                    User
                        .findOne({ email })
                        .then(data => {
                            user.password = bcryptjs.hashSync(pw1, 10)
                            let newUser = new User(user)

                            !data ?
                                newUser
                                    .save()
                                    .then(user => {
                                        req
                                            .login(user, err => {
                                                err ?
                                                    console.log(err)
                                                    :
                                                    res
                                                        .status(200)
                                                        .json({ message: "User logged in...", user })
                                            })
                                    })
                                    .catch(err => console.log(err))
                                :
                                res.json({ message: `email is already registered.` })
                        })
                        .catch(err => console.log(err))
                    :
                    res.json({ message: "Please read criteria for password." })
    },
    loginUser: (req, res, next) => {
        req.body.email === 'admin' ?
            res.json({ message: 'Not valid username' })
            :
            passport
                .authenticate("local", (err, user) => {
                    return err ?
                        res.json({ message: 'Failed to log in!' })
                        :
                        !user ?
                            res.json({ message: "password or email does not match database." })
                            :
                            req.isAuthenticated() ?
                                res
                                    .status(200)
                                    .json({ errors: false, message: "User is already logged in!" })
                                :
                                req.login(user, err => {
                                    return !err ?
                                        res
                                            .status(200)
                                            .json({ errors: false, message: "User is logged in!", user })
                                        :
                                        res
                                            .status(500)
                                            .json({ message: 'Session save went bad.' })
                                })
                })(req, res, next)
    },
    logoutUser: (req, res, next) => {
        req.logout(err => {
            if (err) {
                console.log(err)
            }
            return res.status(200).clearCookie('sid', { path: '/' }).json({ message: 'Logged out' })
        })
    },
    adminLogin: (req, res, next) => {
        !req.body.email === 'admin' ?
            res.json({ message: 'NOT AN ADMIN' })
            :
            passport
                .authenticate("local", (err, user) => {
                    return err ?
                        res.json({ message: 'Failed to log in!' })
                        :
                        !user ?

                            res.json({ message: "password or email does not match database." })
                            :
                            req.isAuthenticated() ?
                                res
                                    .status(200)
                                    .json({ errors: false, message: "User is already logged in!" })
                                :
                                req.login(user, err => {
                                    return !err ?
                                        res
                                            .status(200)
                                            .json({ errors: false, message: 'ADMIN LOGGED IN', user })
                                        :
                                        res
                                            .status(500)
                                            .json({ message: 'Session save went bad.' })
                                })
                })(req, res, next)
    },
    deleteUser: (req, res) => {
        let { _id, flag } = req.body

        User
            .findByIdAndDelete({ _id })
            .then(data => {
                Pet
                    .deleteMany({ userId: _id })
                    .then(data => {
                        flag ?
                            User
                                .find({ email: { $ne: 'admin' } })
                                .populate('petArr')
                                .select('-password')
                                .then(data => {
                                    let newObj = {
                                        data,
                                        flag
                                    }

                                    return res
                                        .status(200)
                                        .json({ message: "User was deleted!", newObj })
                                })
                                .catch(err => console.log(err))
                            :
                            req
                                .logout(err => {
                                    let newObj = {
                                        data,
                                        flag
                                    }
                                    return err ?
                                        console.log(err)
                                        :
                                        res
                                            .status(200)
                                            .json({ message: "User was deleted!", newObj })
                                })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    updateUser: async (req, res) => {
        let { email, newEmail, npass1, npass2, _id, firstName, lastName } = req.body
        let updatedProfile = Object.assign({}, { _id, firstName, lastName })
        console.log('new req', req.body)

        if (npass1 && npass1 !== npass2) {
            return res.json({ message: 'The passowrds are not a match' })
        }

        if (npass1) {
            if (npass1.match(/[a-z]+/) && npass1.match(/[0-9]+/) && npass1.match(/[A-Z]+/) && npass1.match(/\W+/) && npass1.length >= 8) {
                let passVerify = await User
                    .findById({ _id })
                    .then(data => bcryptjs.compareSync(npass1, data.password))
                    .catch(err => console.log(err))

                if (!passVerify) {
                    updatedProfile.password = bcryptjs.hashSync(npass1, 10)
                }
            }
            else {
                return res.json({ message: 'Please read password requirements.' })
            }
        }

        if (!newEmail || newEmail === req.email) {
            updatedProfile.email = email

            User
                .findByIdAndUpdate({ _id }, updatedProfile, { new: true })
                .populate('petArr')
                .exec()
                .then(data => {
                    req.login(data, err => {
                        return !err ?
                            res
                                .status(200)
                                .json({ errors: false, message: "User is logged in! line 221", data })
                            :
                            res
                                .status(500)
                                .json({ message: 'Session save went bad. line 225' })

                    })
                })
                .catch(err => console.log(err))
        }
        else {
            User
                .findOne({ newEmail })
                .then(data => {
                    if (!data) {
                        updatedProfile.email = newEmail

                        User
                            .findByIdAndUpdate({ _id }, updatedProfile, { new: true })
                            .populate('petArr')
                            .exec()
                            .then(data => {
                                req.login(data, err => {
                                    return !err ?
                                        res
                                            .status(200)
                                            .json({ errors: false, message: "User is logged in! line 247", data })
                                        :
                                        res
                                            .status(500)
                                            .json({ message: 'Session save went bad. line 251' })
                                })
                            })
                            .catch(err => console.log(err))
                    }
                    else {
                        return res.json({ message: `${email} is already registered! line 257` })
                    }
                })
                .catch(err => console.log(err))
        }
    }
}