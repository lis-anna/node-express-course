const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger.js');
const authorize = require('./authorize');
//req - middleware - res
//app.use([logger, authorize]);

//app.use(express.static('./public'));

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/api/products', [logger, authorize], (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
