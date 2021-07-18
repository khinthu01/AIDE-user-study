const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieSession = require('cookie-session');
const axios = require('axios');

// including database link
const db = require('./data/db');

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

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static'))); // important if css/js/image files from static are required

app.use('/', routes());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
