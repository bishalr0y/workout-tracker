const express = require('express')

const app = express()

// middleware to accept json objects (body parser)
app.use(express.json())


// create route
app.post('/', (req, res) => {
    res.status(200).json({msg : 'create workout'})
})

// read route
app.get('/', (req, res) => {
    res.status(200).json({msg: 'get all the workouts'})
})

// update route
app.put('/update/:id', (req, res) => {
    res.status(200).json({msg: `update workout for id: ${req.parmams.id}`})
})

// delete route
app.delete('/delete/:id', (req, res) => {
    res.status(200).json({msg: `delete workout for id: ${req.params.id}`})
})



app.listen(4000, () => {
    console.log('Server running at port 4000')
})