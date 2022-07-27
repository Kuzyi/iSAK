import { useNavigate } from 'react-router-dom'



const Tasks = (props) => {

  let navigate = useNavigate()

  const handleDelete = async(e) => {
    await props.deleteTask(e)
    // .then(navigate('/tasks'))
    document.location.reload()

  }


  return (
    <div>
    <div className="grid">
      {
      props.task.map((task) => (
        // onClick={() => showBoat(boat)} took out on click no showboat function
        <div className="card"  key={task.taskName}>
          <h3>{task.taskName}</h3>
          <h4>{task._id}</h4>
          <button value={task._id} onClick={handleDelete}>Delete Task</button>
        </div>
      ))}
    </div>
    
    </div>
    
  )
}

export default Tasks
