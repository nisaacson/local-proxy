var http = require('http'),
    request = require('request');
var inspect = require('eyespect').inspector();
module.exports = function (listenPort, forwardPort) {
  var server = http.createServer(function(req,res) {
    var url = req.url
    var forwardURL = 'http://localhost:' + forwardPort + url
    req.pipe(request(forwardURL)).pipe(res)
  })
  server.listen(listenPort)
  inspect(listenPort, 'Proxy server listening on port')
  inspect(forwardPort, 'Proxy server forwarding to  port')
  return server
}
