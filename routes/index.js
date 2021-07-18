const { default: axios } = require('axios');
const express = require('express');
// const TaskService = require('../services/TaskService');

// const taskForm = require('./taskforms');
const taskRoute = require('./task');
const taskFormRoute = require('./taskform');
const router = express.Router();

module.exports = (params) => {
  // const { taskService } = params;

  router.get('/', async (request, response) => {
    // const tasks = await taskService.getTaskList();
    const Url = 'http://localhost:3000/task';

    // eslint-disable-next-line no-return-assign
    const taskData = await axios.get(Url);
    const { data } = taskData;

    // console.log(taskData.data[0].task_title);
    // console.log(tasks);
    response.render('layout/layout', { pageTitle: 'Welcome', template: 'index', data });
  });

  router.use('/taskform', taskFormRoute(params));
  router.use('/task', taskRoute());

  return router;
};
