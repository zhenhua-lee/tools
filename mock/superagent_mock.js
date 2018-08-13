var request = require('superagent');
var superagentMocker = require('superagent-mocker')(request);
var Mock = require('mockjs');

superagentMocker.get('./data/super.json', function(req) {
    var data = Mock.mock({
        'id|2-10': 12,
        'name|2': 'ok'
    });
  return data;
});

request
  .get('./data/super.json')
  .end(function(err, data) {
    console.log(data); // { id: 1, content: 'Hello World' }
  });