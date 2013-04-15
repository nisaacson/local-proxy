var argv = require('optimist').demand(['listen-port', 'forward-port']).argv
var listenPort = argv['listen-port']
var forwardPort = argv['forward-port']
var index = require('./index')
var server = index(listenPort, forwardPort)
