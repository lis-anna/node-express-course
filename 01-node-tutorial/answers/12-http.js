const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  // console.log(req);
  //  res.write();
  //  res.end();
  else if (req.url === '/about') {
    res.end('Welcome to our about page');
  } else
    res.end(`<h1>Oops!</h1> 
  <p> We can't seem to find the page you're looking for </p>
  <a href="/"> back home </a>`);
});

server.listen(5000);
