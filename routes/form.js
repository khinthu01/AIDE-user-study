const express = require('express');
const { default: axios } = require('axios');

// const check = require('express-validator');

const router = express.Router();

module.exports = () => {
  // const { taskFormService } = params;

  router.get('/:task_id', async (request, response, next) => {
    try {
      const taskformUrl = `http://localhost:3000/taskform/${request.params.task_id}`;

      const questionsUrl = `http://localhost:3000/taskform/questions/${request.params.task_id}`;

      const taskform = await axios.get(taskformUrl);
      const taskformData = taskform.data;
      // eslint-disable-next-line no-console
      const title = taskformData.task_title;

      const taskquestions = await axios.get(questionsUrl);
      const questions = taskquestions.data;

      response.render('layout/layout', {
        pageTitle: title,
        template: 'form',
        taskformData,
        questions,
      });
    } catch (err) {
      return next(err);
    }
  });

  /* router.post(
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
  ); */

  return router;
};
