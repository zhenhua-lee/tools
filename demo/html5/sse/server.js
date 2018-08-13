var http = require('http');
var st = require('st');
var os = require('os');

var server = http.createServer((req, res) => {
  var url = req.url;
  console.log('url: ', url)
  if (url === '/sse') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
    })
    var num = 0;
    function f() {
      if (num === 10) {
        res.end();
      } else {
        res.write('event: myevent' + os.EOL);
        res.write('id: ' + num + os.EOL);
        res.write('data: ' + num + os.EOL + os.EOL);
        num ++
      }
      setTimeout(f, 1000);
    }
    f();
  } else {
    var stOpt = {path: __dirname, url: '/static'};
    console.log('stOpt: ', stOpt);
    var mount = st(stOpt);
    mount(req, res, () => {console.log('error staitc'); res.end('error')});
  }
});

server.listen(3001, () => {
  console.log('server is on ...');
});
