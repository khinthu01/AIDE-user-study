const express = require('express');
const taskFormController = require('../controllers/taskFormController');
const responseController = require('../controllers/responseController');
// const TaskForm = require('../models/taskform');
const { default: axios } = require('axios');

const router = express.Router();

module.exports = () => {
  router.get('/', taskFormController.getTaskForms);
  router.post('/', taskFormController.createTaskForm);
  router.get('/:task_id', taskFormController.getTaskFormById);
  router.patch('/:task_id', taskFormController.updateTaskForm);
  router.get('/questions/:task_id', taskFormController.getQuestions);

  router.get('/responses', responseController.getResponses);

  return router;
};
