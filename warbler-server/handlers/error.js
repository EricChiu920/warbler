function errorHandler(error, req, res, next) {
  return next(res.status(error.status || 500).json({
    error: {
      message: error.message || 'Oops! Something went wrong.',
    },
  }));
}

module.exports = errorHandler;
