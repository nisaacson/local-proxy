#!/usr/bin/env node
var argv = require('optimist').alias('l', 'listen-port').alias('f', 'forward-port').demand(['listen-port', 'forward-port']).argv
var listenPort = argv['listen-port']
var forwardPort = argv['forward-port']
var index = require('./index')
var server = index(listenPort, forwardPort)
