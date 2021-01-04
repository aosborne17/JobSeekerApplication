## Test route

### test

- @desc Test rout for understanding
- @route GET /api/v1/test/
- @access Public
- @params null
- @body

```json
{
  "testFlag: true/false, // boolean
  "testMsg": "Test msg" // string
}
```

- @error express-validator, custom

## Auth route

### register

- @desc Create new user (job seeker) in User model
- @route POST /api/v1/auth/register
- @access Public
- @params null
- @body

```json
{
  "firstName: "john", // string trim lowercase one-word max-length-20 required
  "lastName": "doe", // string trim lowercase one-word max-length-20 required
  "dob": "07012000", // DDMMYYYY string type-numeric one-word length-8 required,
  "country": "IN", // Enum-string ( Use The two-letter country code / country abbreviation ISO-3166-1 ALPHA-2 )
  "email": "test@email.com", // string type-email unique
  "resume": {...}, // Ignore now
  "contact": "+919999900000", // International formate
  "password": "password@123", // Password must be alphanumeric and contain special character(!@#$%^&*) store in encrypted formate use bcrypt package
}
```

- @response
- success

```json
{
  "success": true,
  "data": {...} // Contains bearer token using JWT
}
- error
```

```json
{
  "success": false,
  "error": {...} // Error based on context
}
```

- @error express-validator, custom, mongo-error

### login

- @desc Login to application and receive bearer token
- @route GET /api/v1/auth/login
- @access Public
- @params null
- @body

```json
{
  "email": "test@email.com", // string type-email
  "password": "password@123" // Password must be alphanumeric and contain special character(!@#$%^&*)
}
```

- @response
- success

```json
{
  "success": true,
  "data": {...} // Contains bearer token using JWT
}
- error
```

```json
{
  "success": false,
  "error": {...} // Error based on context
}
```

- @error express-validator, custom, mongo-error
