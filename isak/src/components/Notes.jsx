import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Note from '../components/Note'




const Notes = (props) => {



  const handleDelete = async(e) => {
    await props.deleteNote(e)
    document.location.reload()

  }










  
  return (
    <div>
    <div className="grid">
      {
      props.note.map((note, index) => (
        <Note note={note} handleDelete={handleDelete}/>
      ))}
    </div>
    
    </div>
    
  )
}

export default Notes