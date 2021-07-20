const FormChange = require('../models/formChange');

const createFormChange = async (req, res) => {
  try {
    const formChange = new FormChange(req.body);
    await formChange.save();
    res.status(201).json(formChange);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

const getFormChanges = async (req, res) => {
  try {
    const formChanges = await FormChange.find();
    res.status(200).json(formChanges);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

const getFormChangeByTaskId = async (req, res) => {
  try {
    const formChange = await FormChange.findOne(req.params.task_id);
    res.status(200).json(formChange);
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

const updateFormChange = async (req, res) => {
  const allowedOptions = ['changes'];
  const selectedOption = Object.keys(req.body);

  const doesExists = selectedOption.every((option) => allowedOptions.includes(option));

  if (!doesExists) {
    return res.status(404).json({ success: false, error: 'error 404 not found' });
  }

  try {
    const formChange = await FormChange.findOne({
      _task: req.params.task_id,
      participant_id: req.params.participant_id,
    });
    // eslint-disable-next-line no-return-assign
    formChange['changes'].push(req.body['changes']);
    await formChange.save();
    res.status(200).json(formChange);
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

module.exports = { createFormChange, getFormChanges, getFormChangeByTaskId, updateFormChange };
