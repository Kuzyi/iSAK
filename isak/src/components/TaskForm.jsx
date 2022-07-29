import { useNavigate } from 'react-router-dom'
const TaskForm = (props) => {
  
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addTask(e)
    document.location.reload()
  }





  const newTask = props.newTask

  return (
    <div id="myDIV" class="header">
    <h1>Add A New Task</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newTask.taskName} onChange={ props.handleChangeTask} name={'taskName'} placeholder={'Enter Task'} />
      <h3>Complete Box</h3>
      <input type="checkbox" value={newTask.status} onChange={ props.handleChangeTaskStatus} name={'status'} placeholder={'Complete?'} />
      <button class="addBtn">Submit</button>
    </form>
    </div>
  );
}

export default TaskForm