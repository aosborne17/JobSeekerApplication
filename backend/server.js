const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const connectDB = require('./config/db.js') 

// Middleware import
const errorHandler = require('./middleware/error');

// Changed the dotenv config as it wasn't working previously
dotenv.config()

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Connect to database
connectDB()

// Rout files
const test = require('./routes/test');

// Mount routers
app.use('/api/v1/test', test);


// Importing user route and mounting it
const userRoutes = require('./routes/userRoutes.js')

app.use('/api/v1/users', userRoutes)


// Handle all error
app.use(errorHandler);



app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.listen(
  process.env.PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);


// Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`unhandledRejection Error: ${err.message}`.red.inverse);
//   // Close server & exit process
//   server.close(() => process.exit(1));
// });
