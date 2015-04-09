/**
 * Module dependencies
 */

var bodyParser     = require('body-parser');
var errorHandler   = require('errorhandler');
var express        = require('express');
var http           = require('http');
var methodOverride = require('method-override');
var morgan         = require('morgan');
var path           = require('path');

/**
 * Application prototype
 */

var app = express();

/**
 * Application configuration
 */

app.set('port', process.env.PORT || 3000);

/**
 * Middleware configuration
 */

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

/**
 * Sets up the public folder
 */

var publicFolder = path.join(__dirname, '../app');
app.use(express.static(publicFolder));

/**
 * Environment configuration
 */

var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  app.use(errorHandler());
}

/**
 * Connects to the database
 */

var db = require('./config/db');

/**
 * Sets up the API
 */

var api = {};

api.contacts = require('./modules/contacts/routes.js');

/**
 * Sets up the routes
 */

 app.use('/api/contacts', api.contacts);

app.all('*', function(req, res) {
  res.sendFile(publicFolder + '/index.html');
});

/**
 * Exports the app
 */

module.exports = app;
