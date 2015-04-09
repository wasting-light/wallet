/**
 * Module dependencies
 */

var Contact = require('./model');

/**
 * Creates a new contact
 */

var create = function(req, res, callback) {
  var contact = new Contact(req.body);

  contact.save(function(err, data) {
    callback(err, data, res);
  });
};

/**
 * Retrieves all the contacts
 */

var retrieve = function(req, res, callback) {
  var query = {};

  Contact.find(query, function(err, data) {
    callback(err, data, res);
  });
};

/**
 * Finds one contact by its _id
 */

var findOne = function(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Contact.findOne(query, function(err, data) {
    callback(err, data, res);
  });
};

/**
 * Updates one contact by its _id
 */

var update = function(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};
  var mod = req.body;

  delete mod._id;

  Contact.update(query, mod, function(err, data) {
    callback(err, data, res);
  });
};

/**
 * Removes a contact by its _id
 */

var remove = function(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Contact.remove(query, function(err, data) {
    callback(err, data, res);
  });
};

/**
 * Exports all the actions
 */

module.exports = {
  create: create,
  retrieve: retrieve,
  findOne: findOne,
  update: update,
  remove: remove,
};
