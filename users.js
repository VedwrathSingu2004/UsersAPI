const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    emailID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        match: /^\d{10}$/,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    }
})

const Users = mongoose.model("User", userSchema)
module.exports = Users