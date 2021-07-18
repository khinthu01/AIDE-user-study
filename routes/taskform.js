const express = require('express');
const taskFormController = require('../controllers/taskFormController');

// const TaskForm = require('../models/taskform');
const { default: axios } = require('axios');

const router = express.Router();

module.exports = () => {
  // paths for accessing task form apis
  router.get('/', taskFormController.getTaskForms);
  router.post('/', taskFormController.createTaskForm);
  router.get('/:task_id', taskFormController.getTaskFormById);
  router.patch('/:task_id', taskFormController.updateTaskForm);
  router.get('/questions/:task_id', taskFormController.getQuestions);

  return router;
};
