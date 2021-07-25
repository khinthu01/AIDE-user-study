const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task_title: { type: String },
  audio_title: { type: String },
  audio_Url: { type: String },
  prompt_time: { type: Number },
  text: { type: String },
  prompted: { type: Boolean, default: false },
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
