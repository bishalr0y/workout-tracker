const express = require('express')
const router = require('./routes/workoutRoutes')

const app = express()

// middleware to accept json objects (body parser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/workouts', router)


app.listen(4000, () => {
    console.log('Server running at port 4000')
})