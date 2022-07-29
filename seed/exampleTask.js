const db = require('../db')
const Task = require('../models/tasks')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const exampleTask = [
    {
      taskName: 'Example Task',
      status: 'completed'
    }
  ]

  await Task.insertMany(exampleTask)
  console.log('Here is an example class!')
}
const run = async () => {
  await main()
  db.close()
}

run()
