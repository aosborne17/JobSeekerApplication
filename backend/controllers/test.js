const ErrorResponse = require('../utils/ErrorResponse');
const { validationResult } = require('express-validator');

// @desc    Test rout for understanding
// @route   GET /api/v1/auth/test
// @access  Public
exports.test = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new ErrorResponse(
        'Testing validation error',
        400,
        'express-validator',
        errors.array()
      )
    );
  }
  const { testFlag, testMsg } = req.body;
  if (testFlag === true) {
    res.status(200).json({
      success: true,
      data: {
        testFlag: testFlag,
        testMsg: testMsg,
      },
    });
  } else {
    return next(new ErrorResponse('Test error', 400));
  }
};
