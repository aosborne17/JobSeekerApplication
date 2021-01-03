const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {
  // Log to console for dev
  if (process.env.NODE_ENV === 'development') {
    console.log('-----ERROR-----');
    console.log(err);
    console.log('---------------');
  }

  if (err.errorFlag === 'express-validator') {
    res.status(err.statusCode || 500).json({
      success: false,
      error: {
        errorMsg: err.message || 'Server Error',
        flag: 'express-validator',
        errors: err.payload,
      },
    });
    return;
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: {
      errorMsg: err.message || 'Server Error',
    },
  });
};

module.exports = errorHandler;
