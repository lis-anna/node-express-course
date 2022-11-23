const express = require('express');
const app = express();
const path = require('path');
const logger = require('./practice-middleware');

app.use(express.static('./new-public'));
app.use(logger);

app.get('/sample', (req, res) => {
  res.status(200).send('This is working');
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './new-public/index.html'));
});

app.all('/*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log('Listening to port 3000...');
});

module.exports = app;
