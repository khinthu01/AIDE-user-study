const express = require('express');
const TaskService = require('../services/TaskService');

const router = express.Router();

module.exports = (params) => {
  const { taskService } = params;

  router.get('/:task_titles', async (request, response) => {
    response.render('layout/layout', { pageTitle: 'Welcome', template: 'taskform' });
  });

  return router;
};
