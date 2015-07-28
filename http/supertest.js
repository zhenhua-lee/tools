var request = require('superagent');
var test = require('supertest');

request.get('http://127.0.0.1:3002/data/super2.json')
    .end(function(err, res) {
        // if (err) console.dir(err.response);

        console.dir(res.buffered);
    });
