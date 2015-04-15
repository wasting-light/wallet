/**
 * Module dependencies
 */

var express = require('express');
var router = express.Router();
var contact = require('./controller');

/**
 * Default callback to the actions
 *
 * Sends the resulting data via json
 */

var callback = function(err, data, res) {
  if(err) throw err;

  res.json(data);
};

router.get('/', function(req, res) {
  contact.retrieve(req, res, callback);
});

router.get('/:id', function(req, res) {
  contact.findOne(req, res, callback);
});

router.post('/', function(req, res) {
  contact.create(req, res, callback);
});

router.put('/:id', function(req, res) {
  contact.update(req, res, callback);
});

router.delete('/:id', function(req, res) {
  contact.remove(req, res, callback);
});

/**
 * Exports the router
 */

module.exports = router;
