const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }
  // receive token from header
  const token = authHeader.split(' ')[1];

  try {
    //decode token with the secret from.env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //select name value from decoded message
    const { name } = decoded;
    // assign user to this value
    req.user = { name };
    //  pass on the next function
    next();
  } catch (error) {
    throw new CustomAPIError('Not authorized to access the route', 401);
  }
};

module.exports = authenticationMiddleware;
