var http = require('http');
var port = process.env.PORT || 8081;
var message = process.env.MESSAGE || '?';

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Devsumit.</h1>' + '<h1 style="color:Red">' + message + '</h1>');
}).listen(port);
