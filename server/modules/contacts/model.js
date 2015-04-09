/**
 * Module dependencies
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
 * Creates the database schema
 */

var ContactSchema = new Schema({
  name: {
    type: String,
    default: ''
  },

  avatar: {
    type: String,
    default: ''
  },

  phone: {
    type: String,
    default: ''
  },

  email: {
    type: String,
    default: ''
  },

  address: {
    type: String,
    default: ''
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  }
});

/**
 * Exports the schema
 */

module.exports = mongoose.model('Contact', ContactSchema);
