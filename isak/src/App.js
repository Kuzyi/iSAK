import { useState, useEffect } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Nav from './components/Nav'
import Notes from './components/Notes'
import Tasks from './components/Tasks'
import NoteForm from './components/NoteForm'
import TaskForm from './components/TaskForm'

const App = () => {
  const [task, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    taskName: '',
    status: ''
  })

  const [note, setNotes] = useState([])
  const [newNote, setNewNote] = useState({
    noteTitle: '',
    noteString: ''
  })

  useEffect(() => {
    async function getTasks() {
      const taskList = await axios.get(`http://localhost:3001/tasks`)
      setTasks(taskList.data.tasks)
      // console.log(taskList)
    }
    getTasks()
  }, [])

  useEffect(() => {
    async function getNotes() {
      const noteList = await axios.get(`http://localhost:3001/notes`)
      setNotes(noteList.data.notes)
      console.log(noteList)
    }
    getNotes()
  }, [])

  const addTask = async (e) => {
    e.preventDefault()
    let res = await axios
      .post('http://localhost:3001/tasks', newTask)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(res)
  }

  const addNote = async (e) => {
    e.preventDefault()
    let res = await axios
      .post('http://localhost:3001/notes', newNote)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(res)
  }

  const deleteTask = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
    let deleteId = e.target.value
    let res = await axios
      .delete(`http://localhost:3001/tasks/${deleteId}`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(res)
  }

  const deleteNote = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
    let deleteId = e.target.value
    let res = await axios
      .delete(`http://localhost:3001/notes/${deleteId}`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(res)
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
                <Notes note={note} deleteNote={deleteNote} />{' '}
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
                <Tasks task={task} deleteTask={deleteTask} />{' '}
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
