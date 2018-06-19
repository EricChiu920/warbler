const jwt = require('jsonwebtoken');
const db = require('../models');

exports.signup = async function signUp(req, res, next) {
  try {
    const user = await db.User.create(req.body);
    const { id, username, profileImageUrl } = user;
    const token = jwt.sign(
      {
        id,
        username,
        profileImageUrl,
      },
      process.env.SECRET_KEY,
    );

    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token,
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = 'Sorry, that username and/or email is already is use.';
    }
    return next({
      status: 400,
      mssage: err.message,
    });
  }
};

exports.signin = () => {

};
