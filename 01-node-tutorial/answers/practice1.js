const content = require('./practice2');
const { readFile, writeFile } = require('fs');
const os = require('os');
const user = os.userInfo();
console.log(user);

writeFile(
  './content/practice.txt',
  `${content} asks ${user.username}`,
  (result, err) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
