const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

module.exports = () => {
  /* const { taskService } = params;

  router.get('/', async (request, response) => {
    const tasks = await taskService.getTaskList();
    response.json(tasks);
  }); */

  router.get('/', taskController.getTasks);
  router.post('/', taskController.createTask);
  router.patch('/:id', taskController.updateTask);

  return router;
};
