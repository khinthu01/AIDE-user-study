const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const TaskService = require('./services/TaskService');
const TaskFormService = require('./services/TaskFormService');

const taskService = new TaskService('./data/tasks.json');
const taskFormService = new TaskFormService('./data/taskform.json', '/data/response.json');

const routes = require('./routes');
const app = express();

const port = 3000;

app.set('trust proxy', 1); // without this cookie system may faiil during Production

app.use(
  cookieSession({
    name: 'session',
    keys: ['Fhjkjfh3r8sdl', '57ydsdKHdfjK'],
  })
);

app.use(express.urlencoded({ extended: true }));
// app.use(express.text());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static'))); // important if css/js/image files from static are required
app.use(async (request, response, next) => {
  try {
    const titles = await taskService.getTaskTitles(); // from template variables in more detail video
    response.locals.taskTitles = titles;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use(
  '/',
  routes({
    taskService,
    taskFormService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
