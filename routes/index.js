const express = require('express');

// const taskForm = require('./taskforms');
const taskRoute = require('./task');
const taskFormRoute = require('./taskform');
const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('layout/layout', { pageTitle: 'Welcome', template: 'index' });
  });

  router.use('/taskform', taskFormRoute(params));
  router.use('/task', taskRoute(params));

  return router;
};
