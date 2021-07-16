import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  task_id: Number,
  task_title: String,
  text: String,
  prompted: { type: Boolean, default: false },
});

const Task = mongoose.model('task', taskSchema);

export default Task;
