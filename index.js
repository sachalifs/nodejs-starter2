/**
 * Module dependencies.
 */

var server = module.exports = require('lib/boot');
var config = require('lib/config');
var debug = require('debug')('njs');

/**
 * Launch server
 */

server.listen(config('port'), function() {
  debug('Application started on port %d', config('port'));
});