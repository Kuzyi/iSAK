const Tasks = require('../models/tasks')

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

module.exports = {
  getAllTasks,
  createNewTask
}
