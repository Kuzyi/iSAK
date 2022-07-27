import { useState, useEffect } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
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
    // id: '0',
    taskName: '',
    status: ''
  })

  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState({
    id: '0',
    noteTitle: '',
    noteString: ''
  })

  useEffect(() => {
    async function getTasks() {
      const taskList = await axios.get(`http://localhost:3001/tasks`)
      setTasks(taskList.data.tasks)
      console.log(taskList)
    }
    getTasks()
  }, [])

  const addNote = () => {
    console.log('still need to wire')
  }

  // const addNote = (e) => {
  //   e.preventDefault()
  //   const currentNotes = note
  //   const createdNote = {
  //     ...newNote,
  //     id: parseInt(note.length + 1)
  //   }
  //   currentNotes.push(createdNote)
  //   setNote(currentNotes)
  //   setNewNote({ id: '', taskName: '', status: '' })
  // }

  // const addTask = (e) => {
  //   e.preventDefault()
  //   const currentTasks = task
  //   const createdTask = {
  //     ...newTask,
  //     id: parseInt(task.length + 1)
  //   }
  //   currentTasks.push(createdTask)
  //   setTasks(currentTasks)
  //   setNewNote({ id: '', noteTitle: '', noteString: '' })
  //   console.log(task)
  // }

  const addTask = async (e) => {
    console.log(newTask)
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

  // const deleteTask = () => {
  //   console.log('we are trying :)')
  // }

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

  const handleChangeNote = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value })
  }
  const handleChangeTask = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
    console.log(newTask)
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
