var http = require('http'),
    httpProxy = require('http-proxy');
var inspect = require('eyespect').inspector();
module.exports = function (listenPort, forwardPort) {
  var server = httpProxy.createServer(forwardPort, 'localhost').listen(listenPort);
  inspect(listenPort, 'Proxy server listening on port')
  inspect(forwardPort, 'Proxy server forwarding to  port')
  return server
}
