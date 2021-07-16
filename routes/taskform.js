const express = require('express');
// const TaskService = require('../services/TaskService');

const { check, validationResult } = require('express-validator');

const router = express.Router();

module.exports = (params) => {
  const { taskFormService } = params;

  router.get('/', getTasks);
  router.post('/', createTask);

  router.get('/:task_id', async (request, response, next) => {
    try {
      const title = `Task ${request.params.task_id}`;
      const taskform = await taskFormService.getQuestions(request.params.task_id);
      // console.log(taskform);
      response.render('layout/layout', {
        pageTitle: title,
        template: 'taskform',
        taskform,
        taskID: request.params.task_id,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.post(
    '/:task_id',
    [
      check('q1').trim().isLength({ min: 2 }).escape(),
      check('q2').trim().isLength({ min: 2 }).escape(),
      check('q3').trim().isLength({ min: 2 }).escape(),
    ],
    async (request, response) => {
      const { taskID, participantID, q1, q2, q3 } = request.body;
      console.log(participantID);
      // console.log(task_id);
      await taskFormService.addResponse(taskID, participantID, q1, q2, q3);
      request.session.feedback = {
        message: 'Your response has been submitted',
      };
      response.send('Task completed');
    }
  );

  return router;
};
