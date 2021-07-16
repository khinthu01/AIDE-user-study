const express = require('express');
const TaskService = require('../services/TaskService');

const router = express.Router();

module.exports = (params) => {
  const { taskFormService } = params;

  router.get('/:task_id', async (request, response, next) => {
    try {
      const title = `Task ${request.params.task_id}`;
      const taskform = await taskFormService.getQuestions(request.params.task_id);
      // console.log(taskform);
      response.render('layout/layout', {
        pageTitle: title,
        template: 'taskform',
        taskform,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.post('/', (request, response) => {
    // eslint-disable-next-line no-console
    console.log(request.body);
    response.send('Task completed');
  });

  return router;
};
