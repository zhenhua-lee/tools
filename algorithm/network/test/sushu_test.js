var test = require('tape');
var sushu = require('../sushu');

test('get sushu', function (t) {
  t.deepEquals(sushu.method1(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  t.deepEquals(sushu.method2(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  t.deepEquals(sushu.method3(100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])

  t.end();
})


