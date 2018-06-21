require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

exports.logInRequired = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (decoded) {
        return next();
      }
      return next({
        status: 401,
        message: 'Please log in first',
      });
    });
  } catch (e) {
    return next({
      status: 401,
      message: 'Please log in first',
    });
  }
};

exports.ensureCorrectUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (decoded && decoded.id === req.params.id) {
        return next();
      }
      return next({
        status: 401,
        message: 'Unauthorized',
      });
    });
  } catch (e) {
    return next({
      status: 401,
      message: 'Unauthorized',
    });
  }
};
