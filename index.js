const express = require('express')
const app = express()
require('./db/connection')
const Users = require('./models/users.js')

app.use(express.json())
app.set("view engine", "pug")

app.get('/', (req, res) => {
    res.render('abc')
})

app.get('/', (req, res) => {
    res.render('abc')
})

app.post('/newUser', async (req, res) => {
    try {
        const newUser = new Users(req.body)
        newUser.save()
        res.send(req.body)
        console.log(req.body)
    } catch(e) {
        res.status(400).send(e)
    }
})

app.get('/getAllUsers/', async (req, res) => {
    try {
        const allUsers = await Users.find({})
        res.send(allUsers)
    } catch(e) {
        res.status(400).send(e)
    }
})

app.get('/getAllUsers/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const allUsers = await Users.findById(_id)
        res.send(allUsers)
        console.log(allUsers)
    } catch(e) {
        res.status(400).send(e)
    }
})

app.get('/delUser/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const allUsers = await Users.findByIdAndRemove(_id)
        res.send(`<strong>${allUsers}</strong>`)
        console.log(allUsers)
    } catch(e) {
        res.status(400).send(e)
    }
})

app.listen(7000, () => {
    console.log(`Server is listening on http://127.0.0.1:7000`)
})