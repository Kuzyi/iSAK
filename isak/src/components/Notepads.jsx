import { useNavigate } from 'react-router-dom'



const Notepads = (props) => {

  // let navigate = useNavigate()


  return (
    <div>
    <div className="grid">
      {
      props.note.map((note) => (
        <div className="card" key={note.id}>
          <h3>{note.noteTitle}</h3>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Notepads
