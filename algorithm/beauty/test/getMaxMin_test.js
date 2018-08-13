var test = require('tape');
var maxAndMin = require('../getMaxAndMin');

test('get max and min', function (t) {
  var arr = [12, 32, 543, 32, -21, 23, -212, 0, 1];

  t.deepEqual(maxAndMin.method1(arr), {max: 543, min: -212});
  t.end();
});