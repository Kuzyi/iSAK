const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Notes = new Schema(
  {
    noteTitle: { type: String, required: true },
    noteString: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('notes', Notes)
