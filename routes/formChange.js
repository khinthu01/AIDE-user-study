const express = require('express');
const formChangeController = require('../controllers/formChangeController');

const router = express.Router();

module.exports = () => {
  // paths for accessing task apis
  router.get('/', formChangeController.getFormChanges);
  router.post('/', formChangeController.createFormChange);
  router.get('/:task_id', formChangeController.getFormChangeByTaskId);
  router.patch('/:task_id/:participant_id', formChangeController.updateFormChange);

  return router;
};
