const express = require('express');
const path = require('path');

const TaskService = require('./services/TaskService');

const taskService = new TaskService('./data/tasks.json');

const routes = require('./routes');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static'))); // important if css/js/image files from static are required
app.use(
  '/',
  routes({
    taskService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
