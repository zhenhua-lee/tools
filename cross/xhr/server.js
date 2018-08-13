var http = require('http')
var url = require('url')

http.createServer((req, res) => {
  var urlObject = url.parse(req.url, true);
  var str = JSON.stringify({age: 12});
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  })
  res.end(str);
}).listen(3000, () => {
  console.log('server is on port 3000');
});