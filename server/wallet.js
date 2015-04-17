/**
 * Module dependencies
 */

var bodyParser     = require('body-parser');
var errorHandler   = require('errorhandler');
var express        = require('express');
var http           = require('http');
var io             = require('socket.io')();
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

/**
 * Set up the public folder
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
 * Connect to the database
 */

var db = require('./config/db');

/**
 * Set up the API
 */

var api = {};

api.contacts = require('./modules/contacts/routes.js');

/**
 * Set up the routes
 */

app.use('/api/contacts', api.contacts);

app.all('*', function(req, res) {
  res.sendFile(publicFolder + '/index.html');
});

/**
 * Start the server
 */

var server = http.Server(app).listen(app.get('port'), function() {
  console.log('\nExpress listening\n');
});

/**
 * Create the socket.io connection
 */
io.attach(server);

/**
 * Import the custom sockets
 */
var sockets = require('./lib/io');
sockets(io);
/**
 * Export the application
 */
module.exports = app;
