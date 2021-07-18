const express = require('express');
const { default: axios } = require('axios');

const router = express.Router();

module.exports = () => {
  router.get('/:task_id', async (request, response, next) => {
    try {
      const taskUrl = `http://localhost:3000/task/${request.params.task_id}`;

      const task = await axios.get(taskUrl);
      const taskData = task.data;

      response.render('layout/layout', {
        pageTitle: 'Prompt',
        template: 'prompt',
        taskData,
      });
      //response.send('hello');
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
