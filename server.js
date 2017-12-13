var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.env.PORT || 8081;
var message = process.env.MESSAGE || '?';


var message_color = 'Blue';


var html_start = '<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8" /></head><body style="text-align: center;">';
var html_body = '<img src="astro.png"></img><h1 style="color: ' + message_color + ';font-size: 6em;margin: 0px;">ようこそ!</h1><h2>Salesforce Basecamp 2017</h2><h3>Platform Keynote～AI時代のSalesforce Platform</h3>';
var html_end = '</body></html>';

var server = http.createServer((req, res) => {
  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action == '/astro.png') {
    var img = fs.readFileSync('./astro.png');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    res.end(img, 'binary');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html_start + html_body + html_end);
  }
}).listen(port);
