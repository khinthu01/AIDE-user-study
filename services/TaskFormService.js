const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class TaskFormService {
  constructor(datafile) {
    this.datafile = datafile;
  }

  async getTaskTitles() {
    const data = await this.getData();

    return data.map((taskform) => ({ taskTitle: taskform.task_title }));
  }

  async getQuestions(task_title) {
    const data = await this.getData();
    const taskform = data.find((elm) => elm.task_title === task_title);
    if (!taskform) return null;

    return {
      title: taskform.task_title,
      q1: taskform.q1,
      q2: taskform.q2,
      q3: taskform.q3,
    };
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).taskforms;
  }
}

module.exports = TaskFormService;
