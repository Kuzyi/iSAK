const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tasks = new Schema(
  {
    taskName: { type: String, required: true },
    status: { type: String, required: true }
    // componentIndex: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('tasks', Tasks)
