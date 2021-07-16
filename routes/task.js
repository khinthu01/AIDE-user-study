const express = require('express');
const taskService = require('../controllers/taskService');

const router = express.Router();

module.exports = () => {
  /* const { taskService } = params;

  router.get('/', async (request, response) => {
    const tasks = await taskService.getTaskList();
    response.json(tasks);
  }); */

  router.get('/', taskService.getTasks());
  router.post('/', taskService.createTask());

  return router;
};
