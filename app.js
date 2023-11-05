/* Dependencies Injection */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const Responser = require("./app/response/index");

/* Environment variable kickstart */
require('dotenv').config()

/* Configulations */
const dbConfig = require('./config/database.config.js');

/* Routing Files */
const indexRouter = require('./routes/index');
const usersRouter = require('./app/routes/users');
const toursRouter = require('./app/routes/tours');
const noteRouter = require('./app/routes/notes');
const authenticate = require('./app/middlewares/authentication.js');

/* Server initiation */
var app = express();

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));

/* cors */
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
/* cors */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(dbConfig.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Mongodb connected Successfully!");
}).catch(err => {
  console.log('Could not connect to the Mongodb. Exiting now...', err);
  process.exit();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(authenticate);
app.use('/tours', toursRouter);
app.use('/notes', noteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let response = Responser.error();
  return res.status(response.statusCode).send(response.data);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
