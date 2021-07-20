const mongoose = require('mongoose');

const formChangeSchema = new mongoose.Schema({
  _task: { type: mongoose.Schema.Types.ObjectId, ref: 'tasks' },
  participant_id: { type: String },
  changes: [
    {
      question: { type: String },
      change: { type: String },
      time: { type: String },
    },
  ],
});

const FormChange = mongoose.model('formChange', formChangeSchema);

module.exports = FormChange;
