const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();

// Middleware import
const errorHandler = require('./middleware/error');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rout files
const test = require('./routes/test');

// Mount routers
app.use('/api/v1/test', test);

// Handle all error
app.use(errorHandler);

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`unhandledRejection Error: ${err.message}`.red.inverse);
  // Close server & exit process
  server.close(() => process.exit(1));
});
