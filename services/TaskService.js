const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class TaskService {
  constructor(datafile) {
    this.datafile = datafile;
  }

  async getTaskIDs() {
    const data = await this.getData();

    return data.map((task) => {
      return { taskID: task.task_id };
    });
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).tasks;
  }
}

module.exports = TaskService;
