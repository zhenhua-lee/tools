var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.createReadStream('./external.html').pipe(res);
}).listen(3001, () => {
  console.log('the server is on 3001');
})
