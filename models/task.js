const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task_id: { type: Number },
  task_title: { type: String },
  text: { type: String },
  prompted: { type: Boolean, default: false },
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
