const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: 'firstName'
    },
    lastName: {
        type: String,
        default: 'lastName'
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },

    petArr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
        
    }],

}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)