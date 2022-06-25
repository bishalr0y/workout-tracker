const express = require('express')
const { createWorkout, getWorkouts, updateWorkout, deleteWorkout} = require('../controllers/workoutController')


const router = express.Router()


// create route
router.post('/',  createWorkout)

// read route
router.get('/', getWorkouts)

// update route
router.patch('/:id', updateWorkout)

// delete route
router.delete('/:id', deleteWorkout)



module.exports = router
