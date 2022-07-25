const Notes = require('../models/notes')

const getAllTasks = async (req, res) => {
  try {
    const items = await Notes.find()
    return res.status(200).json({ items })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewTask = async (req, res) => {
  try {
    const item = await new Notes(req.body)
    await item.save()
    return res.status(201).json({
      item
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllTasks,
  createNewTask
}
