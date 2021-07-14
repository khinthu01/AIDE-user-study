const express = require('express');
const taskForm = require('./taskforms');
const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/taskforms', taskForm());

  return router;
};
