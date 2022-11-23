const express = require('express');

const consoleLog = (req, res, next) => {
  const header = JSON.parse(JSON.stringify(req.headers));
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(header);
  console.log(
    `It's great, that you used the ${method} method at ${header.host}${url}. Year: ${time}`
  );

  next();
};

module.exports = consoleLog;
