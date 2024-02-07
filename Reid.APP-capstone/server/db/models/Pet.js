const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    petType: {
        type: String,
        required: true
    },
    breed: {
        type: String,
    },
    age: {
        type: String,
    },
    photoArr: [{
        data: Buffer,
        contentType: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Pet", petSchema)