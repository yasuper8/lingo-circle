const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const multer = require('multer');
const flash = require('connect-flash');

const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
routes(app);
// Middleware///
// Handle file uploads
app.use(multer({dest: './uploads'}));

// Handle Sessions
app.use(session({
  seacret: 'seacret',
  saveUninitialized: true,
  resave: true;
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


module.exports = app;
