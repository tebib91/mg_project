var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var mongoose = require('mongoose');
var passport = require('passport');

var auth = require('./routes/auth');
var question = require('./routes/question');
// var static = require('./routes/static');

var app = express();

app.use(passport.initialize());

app.use('/api/auth', auth);
app.use('/api/question', question);
app.use('/api/static', static);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb+srv://root:24212439@mgdb-ie7cc.mongodb.net/test?retryWrites=true&w=majority', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

module.exports = app;
