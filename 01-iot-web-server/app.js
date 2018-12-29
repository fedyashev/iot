var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const credentials = require('./credentials');

const connectionString = process.env.NODE_ENV === 'production' ?
  credentials.connectionString.production :
  credentials.connectionString.development;

mongoose
  .connect(connectionString, {useNewUrlParser: true})
  .then(connection => {
    const [{name, host, port}, ...rest] = connection.connections;
    console.log(`Connection to ${host}:${port}/${name} success.`);
  })
  .catch(err => {
    console.log(`Connection to db failed.`)
  });


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const api_v1 = require('./routes/api-v1');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', api_v1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //console.log(err);
  next(createError(err.status || 404));
  //res.status(404).json({error: 'Resource not found'});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
  //console.log(err);
  res.status(err.status || 500).json(err);
});

module.exports = app;
