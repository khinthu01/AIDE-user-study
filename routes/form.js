const express = require('express');
const { default: axios } = require('axios');

const { check } = require('express-validator');

const router = express.Router();

module.exports = () => {
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

  router.post(
    '/responses',
    [
      check('q1').trim().isLength({ min: 2 }).escape(),
      check('q2').trim().isLength({ min: 2 }).escape(),
      check('q3').trim().isLength({ min: 2 }).escape(),
    ],
    async (req, res) => {
      const responseUrl = 'http://localhost:3000/responses';
      // sending the form responses to the database
      axios.post(responseUrl, req.body);
    }
  );

  return router;
};
