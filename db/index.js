const mongoose = require('mongoose')
require('dotenv').config()

// let dbUrl =
//   process.env.NODE_ENV === 'production'
//     ? process.env.MONGODB_URI
//     : 'mongodb://127.0.0.1:27017/<database_name>'

let MONGODB_URI = `mongodb+srv://kuzyi:${process.env.PW}@kuzyicluster3.mal5h.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Youre IN!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
