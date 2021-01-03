## Flow of requst

- All backend code is in backend directory
- Request first will handle by express-validator
- After that it will go on controller
- And if any error occur It will handle by error middleware
- Error middleware uses utils class ErrorResponse
- If there is no error then response object should be like this:

```
{
  success: true,
  data: {...} // All data goes here
}
```

- else if there is error then response object should be like this:

```
{
  success: true,
  error: {...} // All error goes here & which handle by error middleware
}
```

- Error type are divided in 3 type currently
  1. **express-validator**: handle by express-validator
  2. **mongo-error**: error occur by database
  3. **custome-one**: like authentication error
- Look **api-v1.md** for endpoint usage
- Use

## Example

Let say we want to create GET request on route /api/v1/test/ with body

```
{
  "testFlag": true/false,
  "testMsg": "Any test msg"
}
```

- First create controler with appropriate controller file ( here test.js indside route )

```
// @desc    Test rout for understanding
// @route   GET /api/v1/auth/test
// @access  Public
exports.test = async (req, res, next) => {
  ...
}
```

- create route in appropriate route file ( here test.js inside routes )

```
const express = require('express');
const { test } = require('../controllers/test');
const router = express.Router();

router.route('/').get(test);

module.exports = router;
```

- Add that route file in server js mount with appropriate path

```
// Rout files
const test = require('./routes/test');

// Mount routers
app.use('/api/v1/test', test);
```

- Look complete example in github repo which demonstraite usage of express-validator and error middleware
