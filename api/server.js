const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome!' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT);
