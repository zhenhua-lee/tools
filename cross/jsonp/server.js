var http = require('http')
var url = require('url')

http.createServer((req, res) => {
  var urlObject = url.parse(req.url, true);
  console.log('urlObject', urlObject)
  var str = JSON.stringify({age: 12});
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })
  res.end(`${urlObject.query.cb}(${str})`);
}).listen(3000, () => {
  console.log('server is on port 3000');
});