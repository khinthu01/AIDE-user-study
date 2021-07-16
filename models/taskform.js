import mongoose from 'mongoose';

const taskFormSchema = new mongoose.Schema({
  task_id: Number,
  task_title: String,
  participant_id: String,
  q1: String,
  q2: String,
  q3: String,
});

const TaskForm = mongoose.model('taskForm', taskFormSchema);

export default TaskForm;
