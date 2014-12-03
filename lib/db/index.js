var mydb = require('mydb-client');
var debug = require('debug')('njs:db');
var url = window.mydb_url;
var sid = window.mydb_socket_id || '';

debug('connecting to \'%s\' and socket id \'%s\'', url, sid);

var db = module.exports = mydb(url, {sid: sid});

// reconnect(db, {connectTimeout: 1e4,retryTimeout: 3e3});
// autoreload(db);