const express = require('express');

// const taskForm = require('./taskforms');
const taskRoute = require('./task');
const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    if (!request.session.visitcount) {
      request.session.visitcount = 0;
    }

    request.session.visitcount += 1;
    console.log(`Number of visits: ${request.session.visitcount}`);
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/task', taskRoute(params));

  return router;
};
