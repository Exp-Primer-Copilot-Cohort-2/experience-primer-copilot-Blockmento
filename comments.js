// Create web server
// Run: node comments.js
// Test: http://localhost:3000/comments

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('comments.html', function (err, data) {
    if (err) {
      res.write('Error reading file');
    }
    res.write(data);
    res.end();
  });
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');