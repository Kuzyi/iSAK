import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'






const UpdateTaskForm= (props) => {
// const [currentUpdate, setCurrentUpdate] = useState([])


const handleSubmit = (e) => {
  props.updateTask(e)
  document.location.reload()
}

console.log(props.task._id)

  return(
    <div>
    <h4>Update Task</h4>
    <form  onSubmit={ handleSubmit }>
      <input type="text" value={props.currentUpdateTask.taskName} onChange={ props.handleChangeUpdateTask} name={'taskName'} placeholder={'Update Task'} />
      <input type="text" value={props.currentUpdateTask.status} onChange={ props.handleChangeUpdateTask} name={'status'} placeholder={'Update Status'} />
      <button value={props.task._id} onClick={ handleSubmit }>Submit Update</button>
      
    </form>
    
    </div>
  )
}

export default UpdateTaskForm