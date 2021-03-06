const TaskForm = require('../models/taskform');

const createTaskForm = async (req, res) => {
  try {
    const taskform = new TaskForm(req.body);
    await taskform.save();
    res.status(201).json(taskform);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

const getTaskForms = async (req, res) => {
  try {
    const taskforms = await TaskForm.find();
    res.status(200).json(taskforms);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

const getTaskFormById = async (req, res) => {
  try {
    const taskform = await TaskForm.findOne({ _task: req.params.task_id });
    // console.log(taskform);
    res.status(200).json(taskform);
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

const getQuestions = async (req, res) => {
  try {
    const taskform = await TaskForm.findOne({ _task: req.params.task_id });
    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = taskform;
    res.status(200).json({ q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 });
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

const updateTaskForm = async (req, res) => {
  const allowedOptions = [
    'task_title',
    'participant_id',
    'q1',
    'q2',
    'q3',
    'q4',
    'q5',
    'q6',
    'q7',
    'q8',
    'q9',
    'q10',
  ];
  const selectedOption = Object.keys(req.body);

  const doesExists = selectedOption.every((option) => allowedOptions.includes(option));

  if (!doesExists) {
    return res.status(404).json({ success: false, error: 'error 404 not found' });
  }

  try {
    const taskform = await TaskForm.findOne({ _task: req.params.task_id });
    // eslint-disable-next-line no-return-assign
    selectedOption.forEach((option) => (taskform[option] = req.body[option]));
    await taskform.save();
    res.status(200).json(taskform);
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

module.exports = { createTaskForm, getTaskForms, getTaskFormById, updateTaskForm, getQuestions };
