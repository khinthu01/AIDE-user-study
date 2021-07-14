const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    retrun response.send('Task List');
  });

  router.get('/:shortname', (req,res) => {
      return res.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
