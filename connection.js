const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/usersDB").then(() => {
    console.log('Database Connection Successfull!')
}).catch((err) => {
    console.log('Database Connection Failed!')
})