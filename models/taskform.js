import mongoose from 'mongoose';

const taskFormSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: 'tasks' },
  task_title: { type: String },
  participant_id: { type: String },
  q1: { type: String },
  q2: { type: String },
  q3: { type: String },
});

const TaskForm = mongoose.model('taskForm', taskFormSchema);

module.exports = TaskForm;
