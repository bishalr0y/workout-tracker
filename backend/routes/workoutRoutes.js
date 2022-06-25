const express = require('express')
const { createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout} = require('../controllers/workoutController')


const router = express.Router()


// create workout
router.post('/',  createWorkout)

// get all workouts
router.get('/', getWorkouts)

// Get a single workout
router.get('/:id',getWorkout)

// update workout
router.patch('/:id', updateWorkout)

// delete workout
router.delete('/:id', deleteWorkout)



module.exports = router
