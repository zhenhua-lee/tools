var test = require('tape');
var findByHalf = require('../findByHalf');

test('find by half', function(t) {
  var arr = [1, 10, 23, 102, 434, 478, 546, 654, 1204, 3456, 6452];

  t.equal(findByHalf(arr, 23), 2);
  t.equal(findByHalf(arr, 3456), 9);
  t.equal(findByHalf(arr, 230), null);

  t.end();
})