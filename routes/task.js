const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

module.exports = () => {
  // paths for accessing task apis
  router.get('/', taskController.getTasks);
  router.post('/', taskController.createTask);
  router.patch('/:id', taskController.updateTask);

  return router;
};
