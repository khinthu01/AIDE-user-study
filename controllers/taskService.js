import Task from './models/task.js';

// eslint-disable-next-line import/prefer-default-export
export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ success: false, error });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ success: false, error });
  }
};

export const updateTask = async (req, res) => {
  const allowedOptions = ['text', 'prompted'];
  const selectedOption = Object.keys(req.body);

  const doesExists = selectedOption.every((option) => allowedOptions.includes(option));

  if (!doesExists) {
    return res.status(404).json({ success: false, error });
  }

  try {
    const task = await Task.findByID({ _id: req.params.id });
    // eslint-disable-next-line no-return-assign
    selectedOption.forEach((option) => (task[option] = req.body[option]));
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ success: false, error });
  }
};
