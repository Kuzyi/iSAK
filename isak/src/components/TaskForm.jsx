import { useNavigate } from 'react-router-dom'
const TaskForm = (props) => {
  
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addTask(e)
    document.location.reload()
  }





  const newTask = props.newTask

  return (
    <div>
    <h1>Add A New Task</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newTask.taskName} onChange={ props.handleChangeTask} name={'taskName'} placeholder={'Enter Task'} />
      <input type="text" value={newTask.status} onChange={ props.handleChangeTask} name={'status'} placeholder={'Complete?'} />
      <button>Submit</button>
    </form>
    </div>
  );
}

export default TaskForm