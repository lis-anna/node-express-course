const express = require('express');
const app = express();

//app.get
app.get('/', (req, res) => {
  res.status(200).send('Home page');
  // console.log()
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});
//app.all - used for any other case in case
app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});
//app.post
//app.put
//app.delete

//app.use
//app.listen
app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
