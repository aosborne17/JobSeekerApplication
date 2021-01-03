const { body } = require('express-validator');

exports.testVal = [
  body('testMsg').not().isEmpty().withMessage('testMsg is required'),
  body('testFlag').not().isEmpty().withMessage('testFlag is required'),
];
