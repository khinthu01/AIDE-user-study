import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
  _task: { type: mongoose.Schema.Types.ObjectId, ref: 'tasks' },
  task_title: { type: String },
  participant_id: { type: String },
  q1: { type: String },
  q2: { type: String },
  q3: { type: String },
});

const Response = mongoose.model('response', responseSchema);

export default Response;
