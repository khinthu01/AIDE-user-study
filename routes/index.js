const express = require('express');

// const taskForm = require('./taskforms');
const taskRoute = require('./task');
const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/task', taskRoute(params));

  return router;
};
