const express = require('express');
const TaskService = require('../services/TaskService');

const router = express.Router();

module.exports = (params) => {
  const { taskFormService } = params;

  router.get('/:task_titles', async (request, response) => {
    const taskform = await taskFormService.getQuestions(request.params.task_titles);
    console.log(taskform);
    response.render('layout/layout', { pageTitle: 'Welcome', template: 'taskform' });
  });

  return router;
};
