const express = require('express');
const TaskService = require('../services/TaskService');

// const taskForm = require('./taskforms');
const taskRoute = require('./task');
const taskFormRoute = require('./taskform');
const router = express.Router();

module.exports = (params) => {
  const { taskService } = params;

  router.get('/', async (request, response) => {
    const tasks = await taskService.getTaskList();
    // console.log(tasks);
    response.render('layout/layout', { pageTitle: 'Welcome', template: 'index', tasks });
  });

  router.use('/taskform', taskFormRoute(params));
  router.use('/task', taskRoute());

  return router;
};
