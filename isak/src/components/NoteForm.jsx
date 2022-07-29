import { useNavigate } from 'react-router-dom'
const NoteForm = (props) => {
  
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addNote(e)
    document.location.reload()
  }





  const newNote = props.newNote

  return (
    <div>
    <h1>Add A New Note</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newNote.noteTitle} onChange={ props.handleChangeNote} name={'noteTitle'} placeholder={'Enter Note Title'} />
      {/* <input class="noteString" type="text" value={newNote.noteString} onChange={ props.handleChangeNote} name={'noteString'} placeholder={'Enter Note'} /> */}
      <textarea rows="20" cols="50" class="noteString" type="text" value={newNote.noteString} onChange={ props.handleChangeNote} name={'noteString'} placeholder={'Enter Note'}>
Test
</textarea>

      <button>Submit</button>
    </form>
    </div>
  );
}

export default NoteForm