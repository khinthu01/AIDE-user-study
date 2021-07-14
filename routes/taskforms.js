const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.send('Task List');
  });

  router.get('/:shortname', (req, res) => {
    res.send(`Detail page of ${req.params.shortname}`);
  });

  return router;
};
