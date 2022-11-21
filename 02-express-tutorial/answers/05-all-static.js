const express = require('express');
const path = require('path');
const app = express();

//stup static and middleware
app.use(express.static('./public'));

//app.get('/', (req, res) => {
// res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//adding to static assets
// server site rendering
//});

app.all('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
