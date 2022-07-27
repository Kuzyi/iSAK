import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import UpdateTaskForm from '../components/UpdateTaskForm'
import UpdateTaskButton from '../components/UpdateTaskButton'




const Tasks = (props) => {
  const [currentComponent, setCurrentComponent] = useState(0)
  const [currentUpdateTask, setCurrentUpdateTask] = useState({
    updateTaskName: "",
    updateStatus: ""
  })


  let navigate = useNavigate()

  const handleDelete = async(e) => {
    await props.deleteTask(e)
    // .then(navigate('/tasks'))
    document.location.reload()

  }

  const loadUpdateComponent = () => {
    setCurrentComponent((prevState) => prevState + 1)
  }

  const goBackComponent = () => {
    // setCurrentComponent((prevState) => prevState - 1)
  }

  const handleChangeUpdateTask = (e) => {
    // setCurrentUpdateTask({ ...currentUpdate, [e.target.name]: e.target.value })
    // console.log(currentUpdate)
  }


  const addUpdate = async (e) => {
    console.log("hey")
    // console.log(newTask)
    // let res = await axios
    //   .post('http://localhost:3001/tasks', newTask)
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // console.log(res)
  }


  let component

  if (currentComponent ===0) {
    component = <UpdateTaskButton loadUpdateComponent = {loadUpdateComponent} />
  } 

  else if(currentComponent ===1) {
    component = <UpdateTaskForm loadUpdateComponent = {loadUpdateComponent} goBackComponent = {goBackComponent} task={props.task}
    handleChangeUpdateTask={handleChangeUpdateTask} addUpdate={addUpdate} currentUpdateTask={currentUpdateTask} />
  }


  return (
    <div>
    <div className="grid">
      {
      props.task.map((task) => (
        <div className="card"  key={task.taskName}>
          <h3>{task.taskName}</h3>
          <h4>{task._id}</h4>
          <button value={task._id} onClick={handleDelete}>Delete Task</button>
          {component}
        </div>
      ))}
    </div>
    
    </div>
    
  )
}

export default Tasks
