import UpdateNoteForm from '../components/UpdateNoteForm'
import UpdateNoteButton from '../components/UpdateNoteButton'
import { useState } from 'react'
import axios from 'axios'



const Note = (props) => {
  const [currentComponent, setCurrentComponent] = useState(0)
  const [currentUpdateNote, setCurrentUpdateNote] = useState({
    noteTitle: "",
    noteString: ""
  })

  const loadUpdateComponent = (e) => {
    setCurrentComponent((prevState) => prevState + 1)
  }

  const goBackComponent = () => {
    setCurrentComponent((prevState) => prevState - 1)
  }

  const handleChangeUpdateNote = (e) => {
    setCurrentUpdateNote({ ...currentUpdateNote, [e.target.name]: e.target.value })

  }



  const updateNote = async (e) => {
    e.preventDefault()
    console.log(e.target)
    let updateId = e.target.value
    let res = await axios
      .put(`http://localhost:3001/notes/${updateId}`,currentUpdateNote)
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
    component = <UpdateNoteButton note={props.note} loadUpdateComponent = {loadUpdateComponent}  />
  } 

  else if(currentComponent ===1) {
    component = <UpdateNoteForm  goBackComponent = {goBackComponent} note={props.note} loadUpdateComponent = {loadUpdateComponent}
    handleChangeUpdateNote={handleChangeUpdateNote} updateNote={updateNote} currentUpdateNote={currentUpdateNote} />
  }


  


  return(
<div className="card">
          <h3>{props.note.noteTitle}</h3>
          <p>{props.note.noteString}</p>
          <button value={props.note._id} onClick={props.handleDelete} >Delete Note</button>
          {component}
        </div>
  )
}


export default Note