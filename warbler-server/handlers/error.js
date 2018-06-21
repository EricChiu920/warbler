function errorHandler(err, req, res, next) {
  const log = err.console || false;
  if (log) {
    console.log(err);
  }

  return res.status(err.status || 500).json({
    error: {
      message: err.message || 'Oops! Something went wrong.',
    },
  });
}

module.exports = errorHandler;
