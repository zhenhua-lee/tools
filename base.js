/*
 * 用于短暂的测试
*/

var  express = require('express');

var app = express();

app.get('/', function (rewq, res) {
    res.end('hello');
})

var server = app.listen(3002, function () {
    console.log('server is on...');
})