/**
 * Module dependencies
 */

 var mongoose = require('mongoose');

/**
 * The database URI (provided by MongoLab)
 */

var dbURI = 'mongodb://admin:123456@ds061548.mongolab.com:61548/wallet'

/**
 * Connects to the database
 */

mongoose.connect(dbURI);

/**
 * Listens to database events
 */
 
 mongoose.connection.on('connected', function () {
   console.log('Mongoose default connection open to ' + dbURI);
 });

 mongoose.connection.on('error',function (err) {
   console.log('Mongoose default connection error: ' + err);
 });

 mongoose.connection.on('disconnected', function () {
   console.log('Mongoose default connection disconnected');
 });

 mongoose.connection.once('open', function () {
   console.log('Mongoose default connection is open');
 });

 // If the Node process ends, close the Mongoose connection
 process.on('SIGINT', function() {
   mongoose.connection.close(function () {
     console.log('Mongoose default connection disconnected through app termination');
     process.exit(0);
   });
 });
