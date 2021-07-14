const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', async (request, response) => {
    response.render('layout/layout', { pageTitle: 'Welcome', template: 'taskform' });
  });

  return router;
};
