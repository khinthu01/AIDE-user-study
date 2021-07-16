const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class TaskFormService {
  constructor(datafile, answerfile) {
    this.datafile = datafile;
    this.answerfile = answerfile;
  }

  async getTaskIDs() {
    const data = await this.getData();

    return data.map((taskform) => ({ taskID: taskform.task_id }));
  }

  async getTaskTitles() {
    const data = await this.getData();

    return data.map((taskform) => ({ taskTitle: taskform.task_title }));
  }

  async getQuestions(task_id) {
    const data = await this.getData();
    const taskform = data.find((elm) => elm.task_id === task_id);
    if (!taskform) return null;

    return {
      // title: taskform.task_title,
      participantID: taskform.participant_id,
      q1: taskform.q1,
      q2: taskform.q2,
      q3: taskform.q3,
    };
  }

  async addResponse(task_id, participant_id, a1, a2, a3) {
    const data = (await this.getAnswerData()) || [];
    // eslint-disable-next-line no-undef
    // console.log({ task_id, participant_id, a1, a2, a3 });
    data.push({ task_id, participant_id, a1, a2, a3 });
    // console.log(JSON.stringify(data));
    return writeFile(this.answerfile, JSON.stringify(data));
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).taskforms;
  }

  async getAnswerData() {
    const data = await readFile(this.answerfile, 'utf8');
    if (!data) return [];
    return JSON.parse(data).answers;
  }
}

module.exports = TaskFormService;
