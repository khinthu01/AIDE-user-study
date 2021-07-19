const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  _task: { type: mongoose.Schema.Types.ObjectId, ref: 'tasks' },
  task_title: { type: String },
  participant_id: { type: String },
  q1: { type: String },
  q2: { type: String },
  q3: { type: String },
  q4: { type: String },
  q5: { type: String },
  q6: { type: String },
  q7: { type: String },
  q8: { type: String },
  q9: { type: String },
  q10: { type: String },
});

const Response = mongoose.model('response', responseSchema);

module.exports = Response;
