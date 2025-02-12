const express = require('express')
const app = express()
const cons = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhinavgadekar5:Abhikumar%40146@cluster0.nwnyi1y.mongodb.net/restrodb')
    .then(console.log("Connected to database"))
    .catch((err) => {
        console.log(err)
    })

app.use(cons())
app.use(express.json())
app.use('/abc/uploads',express.static('uploads'))
const route = require('./route')
app.use('/abc',route)

app.get(('/'), (req, res) => {
    res.send("running at localhost:8000")
})

app.listen(8000, () => console.log("running at localhost:8000"))