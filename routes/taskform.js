const express = require('express');
// const TaskService = require('../services/TaskService');

const { check, validationResult } = require('express-validator');

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
        task_id: request.params.task_id,
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
      const { task_id, participant_id, a1, a2, a3 } = request.body;
      await taskFormService.addResponse(task_id, participant_id, a1, a2, a3);
      request.session.feedback = {
        message: 'Your response has been submitted',
      };
      response.send('Task completed');
    }
  );

  return router;
};
