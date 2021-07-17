const Task = require('../models/task');

// eslint-disable-next-line import/prefer-default-export

const createTask = async (req, res) => {
  try {
    console.log(req.body);
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

const updateTask = async (req, res) => {
  const allowedOptions = ['text', 'prompted'];
  const selectedOption = Object.keys(req.body);

  const doesExists = selectedOption.every((option) => allowedOptions.includes(option));

  if (!doesExists) {
    return res.status(404).json({ success: false, error: 'error 404 not found' });
  }

  try {
    const task = await Task.findByID({ _id: req.params.id });
    // eslint-disable-next-line no-return-assign
    selectedOption.forEach((option) => (task[option] = req.body[option]));
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ success: false, error: 'error 404 not found' });
  }
};

module.exports = { getTasks, createTask, updateTask };
