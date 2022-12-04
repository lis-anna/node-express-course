const mongoose = require('mongoose');

const connectionString = '';

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('CONNECTED TO DB>>>');
    });
};

module.exports = connectDB;
