const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { taskService } = params;

  router.get('/', async (request, response) => {
    const tasks = await taskService.getTaskIDs();
    response.json(tasks);
  });

  return router;
};
