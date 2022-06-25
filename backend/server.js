const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const workoutRoutes = require('./routes/workoutRoutes')

const app = express()

const PORT = process.env.PORT || 4000

// middleware to log the req
app.use((req, res, next) => {
    console.log(req.method.red, req.path.cyan)
    next() //to go the next middleware
})

// middleware to accept json objects (body parser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/workouts', workoutRoutes)


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})