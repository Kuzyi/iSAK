const Task = require('../models/tasks')

const createTask = async (req, res) => {
  try {
    const task = await new Task(req.body)
    await task.save()
    return res.status(201).json({
      task
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createTask
}
