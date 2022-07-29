import { useNavigate } from 'react-router-dom'
const NoteForm = (props) => {
  
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addNote(e)
    navigate('/notes')
  }





  const newNote = props.newNote

  return (
    <div>
    <h1>Add A New Note</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newNote.noteTitle} onChange={ props.handleChangeNote} name={'noteTitle'} placeholder={'Enter Note Title'} />
      <input type="text" value={newNote.noteString} onChange={ props.handleChangeNote} name={'noteString'} placeholder={'Enter Note'} />
      <button>Submit</button>
    </form>
    </div>
  );
}

export default NoteForm