const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const logon = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  const token = jwt.sign({ name }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
  res.status(200).json({ msg: ' logon', token });
};

const hello = async (req, res) => {
  res.status(200).json({
    msg: `Hello, ${req.user.name}`,
  });
};

module.exports = {
  logon,
  hello,
};
