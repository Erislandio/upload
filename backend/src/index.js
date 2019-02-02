const express = require('express')
const app = express()
const routes = require('./routes')
const morgan = require('morgan')
const mongoose = require('mongoose')


// database setup

mongoose.connect('mongodb://localhost:27017/upload', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use(routes)
app.listen(3000, console.log('Servidor online 3000'))