const express = require('express')

const router = express.Router()


// create route
router.post('/', (req, res) => {
    res.status(200).json({msg : 'create workout'})
})

// read route
router.get('/', (req, res) => {
    res.status(200).json({msg: 'get all the workouts'})
})

// update route
router.put('/update/:id', (req, res) => {
    res.status(200).json({msg: `update workout for id: ${req.params.id}`})
})

// delete route
router.delete('/delete/:id', (req, res) => {
    res.status(200).json({msg: `delete workout for id: ${req.params.id}`})
})



module.exports = router
