import { useState } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Notepads from './components/Notepads'
import Tasks from './components/Tasks'
import NoteForm from './components/NoteForm'
import TaskForm from './components/TaskForm'

const App = () => {
  // The boatsArray is passed into state as the initial state for 'boats' in App.js
  const [task, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    id: '0',
    taskName: '',
    status: ''
  })

  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState({
    id: '0',
    noteTitle: '',
    noteString: ''
  })

  const addNote = (e) => {
    e.preventDefault()
    const currentNotes = note
    const createdNote = {
      ...newNote,
      id: parseInt(note.length + 1)
    }
    currentNotes.push(createdNote)
    setNote(currentNotes)
    setNewNote({ id: '', taskName: '', status: '' })
  }

  const addTask = (e) => {
    e.preventDefault()
    const currentTasks = task
    const createdTask = {
      ...newTask,
      id: parseInt(task.length + 1)
    }
    currentTasks.push(createdTask)
    setTasks(currentTasks)
    setNewNote({ id: '', noteTitle: '', noteString: '' })
  }

  const handleChangeNote = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value })
  }
  const handleChangeTask = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="notepads"
            element={
              <div>
                {' '}
                <NoteForm
                  newNote={newNote}
                  handleChangeNote={handleChangeNote}
                  addNote={addNote}
                />
                <Notepads note={note} />{' '}
              </div>
            }
          />
          <Route
            path="tasks"
            element={
              <div>
                {' '}
                <TaskForm
                  newTask={newTask}
                  handleChangeTask={handleChangeTask}
                  addTask={addTask}
                />
                <Tasks task={task} />{' '}
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
