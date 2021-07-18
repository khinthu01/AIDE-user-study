const { default: axios } = require('axios');
const express = require('express');

const taskRoute = require('./task');
const taskFormRoute = require('./taskform');
const formRoute = require('./form');
const responseRoute = require('./response');
const promptRoute = require('./prompt');

const router = express.Router();

module.exports = () => {
  router.get('/', async (request, response) => {
    const Url = 'http://localhost:3000/task';

    // eslint-disable-next-line no-return-assign
    // getting list of tasks to dynamically generate task list on home page
    const taskData = await axios.get(Url);
    const { data } = taskData;

    response.render('layout/layout', { pageTitle: 'Welcome', template: 'index', data });
  });

  router.use('/taskform', taskFormRoute());
  router.use('/task', taskRoute());
  router.use('/form', formRoute());
  router.use('/responses', responseRoute());
  router.use('/prompt', promptRoute());

  return router;
};
