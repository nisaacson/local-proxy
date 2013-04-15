var inspect = require('eyespect').inspector();
var should = require('should');
var request = require('request')
var express = require('express')
var http = require('http')
var index = require('../index')

describe('Proxy Server', function () {
  var server,
      listenPort = 9000,
      forwardPort = 8080
  before(function () {
    server = index(listenPort, forwardPort)
  })
  after(function () {
    if (server) {
      server.close()
    }
  })
  it('should proxy to server listening on forwardPort', function (done) {
    var output = 'hello world'
    var app = express()
    app.use(app.router)
    app.get('/ping', function (req, res) {
      res.end('pong')
      // res.send('pong')
    })
    var server = http.createServer(app)
    server.listen(forwardPort, function () {
      var url = 'http://localhost:' + listenPort + '/ping'
      request(url, function (err, res, body) {
        should.not.exist(err)
        res.statusCode.should.eql(200)
        should.exist(body)
        body.should.eql('pong')
        done()
      })
    })
  })
})
