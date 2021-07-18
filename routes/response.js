const express = require('express');
const responseController = require('../controllers/responseController');
// const TaskForm = require('../models/taskform');
const { default: axios } = require('axios');

const router = express.Router();

module.exports = () => {
  router.get('/', responseController.getResponses);
  router.post('/', responseController.createResponse);

  return router;
};
