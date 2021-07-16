const express = require('express');
const TaskService = require('../services/TaskService');

const router = express.Router();

module.exports = (params) => {
  const { taskFormService } = params;

  router.get('/:task_id', async (request, response) => {
    const title = `Task ${request.params.task_id}`;
    const taskform = await taskFormService.getQuestions(request.params.task_id);
    console.log(taskform);
    response.render('layout/layout', {
      pageTitle: title,
      template: 'taskform',
      taskform,
    });
  });

  return router;
};
