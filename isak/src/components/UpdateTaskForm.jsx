import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'





const UpdateTaskForm= (props) => {
// const [currentUpdate, setCurrentUpdate] = useState([])


let navigate = useNavigate()

const handleSubmit = (e) => {
  props.addUpdate(e)
  navigate('/tasks')
}

  return(
    <div>
    <h4>Update Task</h4>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={props.currentUpdateTask.updateTaskName} onChange={ props.handleChangeUpdateTask} name={'updateTaskName'} placeholder={'Update Task'} />
      <input type="text" value={props.currentUpdateTask.updateStatus} onChange={ props.handleChangeUpdateTask} name={'updateStatus'} placeholder={'Update Status'} />
      <button>Submit Update</button>
    </form>
    </div>
  )
}

export default UpdateTaskForm