import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Task from '../components/Task'




const Tasks = (props) => {



  const handleDelete = async(e) => {
    await props.deleteTask(e)
    // .then(navigate('/tasks'))
    document.location.reload()

  }










  
  return (
    <div>
      {/* className="grid" */}
    <div class="taskContainer" >
      <ul id="myUL">
      {
      props.task.map((task, index) => (
        <Task task={task} handleDelete={handleDelete}/>
      ))}
      </ul>
    </div>
    
    </div>
    
  )
}

export default Tasks
