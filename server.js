const http= require('http');
const fs = require('fs');
 
const server= http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('myfile.txt', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error reading file');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  }
   else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }});
 server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});