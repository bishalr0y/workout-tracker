const Workout = require('../models/workoutModel')

//@desc: Create workout
//@router: POST /api/workouts/
//@access: Public
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({
            title: title,
            reps: reps,
            load: load
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//@desc: Get workouts
//@router: GET /api/workouts
//@access: Public
const getWorkouts = async(req, res) => {
    try {
        const workouts = await Workout.find()
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//@desc: Get (single) workout
//@router: GET /api/workouts
//@access: Public
const getSingleWorkout = async(req, res) => {
    const id = req.params.id
    try {
        const workout = await Workout.findById(id)
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//@desc: Update workout
//@router: PUT /api/workouts/
//@access: Public
const updateWorkout = (req, res) => {
    res.status(200).json({msg: `update workout for id: ${req.params.id}`})
}

//@desc: Delete workout
//@router: DELETE /api/workouts/
//@access: Public
const deleteWorkout = (req, res) => {
    res.status(200).json({msg: `delete workout for id: ${req.params.id}`})
}

module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout
}