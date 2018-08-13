var test = require('tape');
var dp = require('./bagsUseDP.js');

test('test bags using dp', function(t) {
  var info = [
    {v: 3, val: 12},
    {v: 4, val: 10},
    {v: 5, val: 20},
  ];
  var maxV = 10;

  t.deepEqual(dp(info, maxV), {maxVal: 32, plan: [1, 0, 1]});

  t.end();
});