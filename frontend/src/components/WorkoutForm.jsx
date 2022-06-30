import { useState } from "react"

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState(0)
    const [reps, setReps] = useState(0)

  return (
    <form className="create">
        <h3>Create a new workout:</h3>

        <label>Exercise Title:</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Load (in Kg):</label>
        <input
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
        />
        
        <label>Reps:</label>
        <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
        />
        <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm