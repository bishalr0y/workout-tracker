const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workoutRoutes')

const app = express()

const PORT = process.env.PORT || 4000

// middleware to log the req
app.use((req, res, next) => {
    console.log(req.method.red, req.path.cyan)
    //to go the next middleware
    next() 
})

// middleware to accept json objects (body parser)
app.use(express.json())
//middlware to convert form data to json
app.use(express.urlencoded({ extended: true }))

app.use('/api/workouts', workoutRoutes)

// Serve frontend
// Heroku setup
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + '/frontend/build')))

    app.get('*', (req,  res) => res.sendFile(path.resolve(__dirname, './', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}


// Connect to the DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listening to requests only when the database is connected
        app.listen(PORT, () => {
            console.log("Database connected".cyan.underline)
            console.log(`Server running at port ${PORT}`.blue.underline)
        })
    })
    .catch((err) => {
        console.log(err.message.red.underline)
    })

