import { useNavigate } from 'react-router-dom'
const NoteForm = (props) => {
  
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addNote(e)
    navigate('/notepads')
  }



  const newNote = props.newNote

  return (
    <div>
    <h1>Add A New Note</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newNote.noteTitle} onChange={ props.handleChangeNote} name={'noteTitle'} placeholder={'Enter Title Note'} />
      <input type="text" value={newNote.noteString} onChange={ props.handleChangeNote} name={'noteString'} placeholder={'Enter Note'} />
      {/* <input type="text-area" value={newBoat.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} /> */}

      <button>Submit</button>
    </form>
    </div>
  );
}

export default NoteForm
