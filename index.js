var http = require('http');

var server = http.createServer(function(request, response) {
  if (request.url === '/health') {
    // Health Check Endpoint
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('OK');
  } else if (request.url === '/readiness') {
    // Readiness Check Endpoint
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('OK');
  } else {
    // Your existing route or logic
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('Hello World!');
  }
});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
