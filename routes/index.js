const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Router is working!'))

// router.post('/tasks', controllers.createTask)

router.get('/tasks', controllers.getAllTasks)

router.post('/tasks', controllers.createNewTask)

router.delete('/tasks/:id', controllers.deleteTask)
router.put('/tasks/:id', controllers.updateTask)

module.exports = router
