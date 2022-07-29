import UpdateTaskForm from '../components/UpdateTaskForm'
import UpdateTaskButton from '../components/UpdateTaskButton'
import { useState } from 'react'
import axios from 'axios'



const Task = (props) => {
  const [currentComponent, setCurrentComponent] = useState(0)
  const [currentUpdateTask, setCurrentUpdateTask] = useState({
    taskName: "",
    status: ""
  })

  const loadUpdateComponent = (e) => {
    setCurrentComponent((prevState) => prevState + 1)
  }

  const goBackComponent = () => {
    setCurrentComponent((prevState) => prevState - 1)
  }

  const handleChangeUpdateTask = (e) => {
    setCurrentUpdateTask({ ...currentUpdateTask, [e.target.name]: e.target.value })
    // console.log(currentUpdateTask)
  }

  const handleChangeUpdateTaskStatus = (e) => {
    setCurrentUpdateTask({status: true })
  }



  const updateTask = async (e) => {
    e.preventDefault()
    console.log(e.target)
    let updateId = e.target.value
    let res = await axios
      .put(`http://localhost:3001/tasks/${updateId}`,currentUpdateTask)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(res)
  }


  let component

  if (currentComponent ===0) {
    component = <UpdateTaskButton task={props.task} loadUpdateComponent = {loadUpdateComponent}  />
  } 

  else if(currentComponent ===1) {
    component = <UpdateTaskForm  goBackComponent = {goBackComponent} task={props.task} loadUpdateComponent = {loadUpdateComponent}
    handleChangeUpdateTask={handleChangeUpdateTask} handleChangeUpdateTaskStatus={handleChangeUpdateTaskStatus} updateTask={updateTask} currentUpdateTask={currentUpdateTask} />
  }


  


  return(
<div >
  <li>{props.task.taskName}</li>
          {/* <h4>{props.task._id}</h4> */}
          <button value={props.task._id} onClick={props.handleDelete} >Delete Task</button>
          {component}
        </div>
  )
}


export default Task