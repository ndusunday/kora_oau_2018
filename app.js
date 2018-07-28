var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var villeyRouter = require('./routes/villey');
var companyRouter = require('./routes/company');

var app = express();

var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/villey', villeyRouter);
app.use('/company', companyRouter);

// Get the user model
var User = require('./models/user');
// Import the mongoose module
var mongoose = require('mongoose');
// nev = require('email-verification')(mongoose);

//Set up default mongoose connection
// mongodb://<dbuser>:<dbpassword>@ds153380.mlab.com:53380/grozzonlinedb
// var mongoDB = 'mongodb://grozzonlinedb:grozz2sunday@ds153380.mlab.com:53380/grozzonlinedb';
var mongoDB = 'mongodb://team_ksdb:team_ksdb1@ds257551.mlab.com:57551/team_ksdb';
// var mongoDB = 'mongodb://localhost:27017/grozzonline'

mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
var db = mongoose.connection;

// Bind connection to error event - notification of error
db.on('error', console.error.bind(console, 'MongoDB connection failed, an error occured!!!'));
// // db.on('success', console.status.bind(console, "MongoDD status"));

module.exports = app;
