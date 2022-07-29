import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'






const UpdateNoteForm= (props) => {
// const [currentUpdate, setCurrentUpdate] = useState([])


const handleSubmit = (e) => {
  props.updateNote(e)
  // document.location.reload()
}

console.log(props.note._id)

  return(
    <div>
    <h4>Update Note</h4>
    <form  onSubmit={ handleSubmit }>
      <input type="text" value={props.currentUpdateNote.noteTitle} onChange={ props.handleChangeUpdateNote} name={'noteTitle'} placeholder={'Update Note Title'} />
      <input type="text" value={props.currentUpdateTask.noteString} onChange={ props.handleChangeUpdateNote} name={'noteString'} placeholder={'Update Note'} />
      <button value={props.note._id} onClick={ handleSubmit }>Submit Update</button>
      
    </form>
    
    </div>
  )
}

export default UpdateNoteForm