var test = require('tape');
var maxK = require('../maxK');

test('find max k', function(t) {
  var arr = [23, 4, 32, 53, 54, 121, 0, -323];
  t.deepEqual(maxK(arr, 1), [121]);
  t.deepEqual(maxK(arr, 2), [54, 121]);
  t.deepEqual(maxK(arr, 3), [53, 54, 121]);

  t.end();
})