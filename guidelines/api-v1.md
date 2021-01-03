## Test route

### test

- @desc Test rout for understanding
- @route GET /api/v1/auth/test
- @access Public
- @params null
- @body

```
{
  "testFlag: true/false, // boolean
  "testMsg": "Test msg" // string
}
```

- @error express-validator, custom
