//@desc: Create workout
//@router: POST /api/workouts/
//@access: Public
const createWorkout = (req, res) => {
    res.status(200).json({msg : 'create workout'})
}

//@desc: Get workouts
//@router: GET /api/workouts
//@access: Public
const getWorkouts = (req, res) => {
    res.status(200).json({msg: 'get all the workouts'})
}

//@desc: Get (single) workout
//@router: GET /api/workouts
//@access: Public
const getWorkout = (req, res) => {
    res.status(200).json({msg: `get a single workout with id: ${req.params.id}`})
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
    getWorkout,
    updateWorkout,
    deleteWorkout
}