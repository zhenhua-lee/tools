var http = require('http')
var fs = require('fs');
var path = require('path');

http.createServer((req, res) => {
  var pathname = path.join(__dirname, './jsonp.html');
  console.log('pathname: ', pathname)
  var rs = fs.createReadStream(pathname);
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  rs.pipe(res);
}).listen(3001, () => {
  console.log('server is on port 3001');
});