const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class TaskService {
  constructor(datafile) {
    this.datafile = datafile;
  }
}

module.exports = TaskService;
