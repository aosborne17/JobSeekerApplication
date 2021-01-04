## Flow of request

- All backend code is in backend directory
- Request first will handle by express-validator
- After that it will go on controller
- And if any error occur It will handle by error middleware
- Error middleware uses utils class ErrorResponse
- If there is no error then response object should be like this:

```json
{
  success: true,
  data: {...} // All data goes here
}
```

- else if there is error then response object should be like this:

```json
{
  success: true,
  error: {...} // All error goes here & which handle by error middleware
}
```

- Error type are divided in 3 type currently
  1. **express-validator**: handle by express-validator
  2. **mongo-error**: error occur by database
  3. **custom-one**: like authentication error
- Look **api-v1.md** for endpoint usage
- Use arrow function over regular function
- Use const and let
- Understand basic HTTP response status codes like 400, 200

## Example

Let say we want to create GET request on route /api/v1/test/ with body

```json
{
  "testFlag": true / false,
  "testMsg": "Any test msg"
}
```

- First create controller with appropriate controller file ( here test.js inside route )

```javascript
// @desc    Test rout for understanding
// @route   GET /api/v1/auth/test
// @access  Public
exports.test = async (req, res, next) => {
  ...
}
```

- create route in appropriate route file ( here test.js inside routes )

```javascript
const express = require('express');
const { test } = require('../controllers/test');
const router = express.Router();

router.route('/').get(test);

module.exports = router;
```

- Add that route file in server js mount with appropriate path

```javascript
// Rout files
const test = require('./routes/test');

// Mount routers
app.use('/api/v1/test', test);
```

- Add validator inside validator directory

```javascript
const { body } = require('express-validator');

exports.testVal = [
  body('testMsg').not().isEmpty().withMessage('testMsg is required'),
  body('testFlag').not().isEmpty().withMessage('testFlag is required'),
];
```

- Import validator inside route file

```javascript
const express = require('express');
const { test } = require('../controllers/test');
const { testVal } = require('../validator/test'); // <--- Here
const router = express.Router();

router.route('/').get(testVal, test); // <--- Here

module.exports = router;
```

- Handle validator in controller

```javascript
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
  } // <--- Almost all route will contain this if block

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
    return next(new ErrorResponse('Test error', 400)); // <-- Use custom ErrorResponse object which wil handle by error middleware
  }
};
```

- Error Middleware

```javascript
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
```

- Look complete example in github repo which demonstrate usage of express-validator and error middleware
