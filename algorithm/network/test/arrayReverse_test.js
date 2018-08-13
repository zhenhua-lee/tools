var test = require('tape');
var rev = require('../arrayReverse');

test('array rever by last k', function (t) {
  var expResult = [ 'e', 'f', 'g', 'a', 'b', 'c', 'd']
  t.deepEqual(rev.method1(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3), expResult)
  t.deepEqual(rev.method2(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3), expResult)

  t.end();
});
