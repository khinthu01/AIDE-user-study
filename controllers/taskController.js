const Task = require('../models/task');
const { default: axios } = require('axios');
// eslint-disable-next-line import/prefer-default-export

const createTask = async (req, res) => {
  try {
    // console.log(req.body);
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

const updateTask = async (req, res) => {
  const allowedOptions = ['text', 'prompted'];
  const selectedOption = Object.keys(req.body);

  const doesExists = selectedOption.every((option) => allowedOptions.includes(option));

  if (!doesExists) {
    return res.status(404).json({ success: false, error: 'error 404 not found' });
  }

  try {
    const prompted = req.body['prompted'];

    if (prompted === true) {
      const luxaforUrl = 'https://api.luxafor.com/webhook/v1/actions/solid_color';

      axios.post(
        luxaforUrl,
        { userId: 'a5bd998ec69e', actionFields: { color: 'cyan' } },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } else if (prompted === false) {
      const luxaforUrl = 'https://api.luxafor.com/webhook/v1/actions/solid_color';
      axios.post(
        luxaforUrl,
        { userId: 'a5bd998ec69e', actionFields: { color: 'custom', custom_color: '000000' } },
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    const task = await Task.findById(req.params.id);
    // eslint-disable-next-line no-return-assign
    selectedOption.forEach((option) => (task[option] = req.body[option]));
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

module.exports = { getTasks, getTaskById, createTask, updateTask };
