const Tasks = require('../models/tasks')
const Notes = require('../models/notes')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find()
    return res.status(200).json({ tasks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewTask = async (req, res) => {
  try {
    const task = await new Tasks(req.body)
    await task.save()
    return res.status(201).json({
      task
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const deletedTask = await Tasks.findByIdAndDelete(id)
    if (deletedTask) {
      return res.status(200).send('Task deleted')
    }
    throw new Error('Task not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const updatedTask = await Tasks.findByIdAndUpdate(id, req.body, {
      new: true
    })
    res.status(200).json(updatedTask)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find()
    return res.status(200).json({ notes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewNote = async (req, res) => {
  try {
    const note = await new Notes(req.body)
    await note.save()
    return res.status(201).json({
      note
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params
    const deletedNote = await Notes.findByIdAndDelete(id)
    if (deletedNote) {
      return res.status(200).send('Note deleted')
    }
    throw new Error('Note not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateNote = async (req, res) => {
  try {
    const { id } = req.params
    const updatedNote = await Notes.findByIdAndUpdate(id, req.body, {
      new: true
    })
    res.status(200).json(updatedNote)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
  getAllNotes,
  createNewNote,
  deleteNote,
  updateNote
}
