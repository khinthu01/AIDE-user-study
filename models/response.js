import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
  task_id: Number,
  task_title: String,
  participant_id: String,
  q1: String,
  q2: String,
  q3: String,
});

const Response = mongoose.model('response', responseSchema);

export default Response;
