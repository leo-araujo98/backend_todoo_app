const express = require('express');
const router = express.Router();

const taskController = require('./controllers/taskController')
const tasksMiddleware = require('./middlewares/taskMiddleware')

// router.get('/', (req, res) => res.status(200).send('Temos um back-end funcionando'))
router.get('/task', taskController.getAll);
router.post('/task', tasksMiddleware.checkFildTitle, taskController.createTask);
router.delete('/task/:id', taskController.deleteTasks);
router.put('/task/:id',
    tasksMiddleware.checkFildTitle,
    tasksMiddleware.checkFieldStatus,
    taskController.updateTasks);

module.exports = router;

