const User = require('../db/models').User

module.exports = {
    userLanding: (req, res) => {
        let _id = req.user._id

        User
            .findById({ _id })
            .populate('petArr')
            .select('-password')
            .exec()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },
    generalLanding: (req, res) => {
        User
            .find({ email: { $ne: 'admin' } })
            .populate('petArr')
            .exec()
            .then(data => res.json(data))
            .catch(err => console.log(err))
    }
}