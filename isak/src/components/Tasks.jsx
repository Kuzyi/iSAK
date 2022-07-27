import { useNavigate } from 'react-router-dom'



const Tasks = (props) => {

  // let navigate = useNavigate()


  return (
    <div>
    <div className="grid">
      {
      props.task.map((task) => (
        // onClick={() => showBoat(boat)} took out on click no showboat function
        <div className="card"  key={task.taskName}>
          <h3>{task.taskName}</h3>
        </div>
      ))}
    </div>
    
    </div>
    
  )
}

export default Tasks
