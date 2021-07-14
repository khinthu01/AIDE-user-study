const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class TaskService {
  constructor(datafile) {
    this.datafile = datafile;
  }

  async getTaskIDs() {
    const data = await this.getData();

    return data.map((task) => ({ taskID: task.task_id }));
  }

  async getTaskTitles() {
    const data = await this.getData();

    return data.map((task) => ({ taskTitle: task.task_title }));
  }

  async getTaskList() {
    const data = await this.getData();
    return data.map((task) => ({
      taskID: task.task_id,
      title: task.task_title,
      text: task.text,
      prompted: task.prompted,
    }));
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).tasks;
  }
}

module.exports = TaskService;
