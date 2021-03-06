const express = require('express');
const responseController = require('../controllers/responseController');
// const TaskForm = require('../models/taskform');
const { default: axios } = require('axios');

const router = express.Router();

module.exports = () => {
  // paths for accessing responses apis
  router.get('/', responseController.getResponses);
  router.post('/', responseController.createResponse);

  return router;
};
