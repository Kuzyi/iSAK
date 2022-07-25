const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema(
  {
    noteTitle: { type: String, required: true },
    noteString: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Note', Note)
