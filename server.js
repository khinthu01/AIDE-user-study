const express = require('express');
const path = require('path');

const app = express ();

const port = 3000;

app.use(express.static(path.join(__dirname, './static'))); // important if css/js/image files from static are required

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});