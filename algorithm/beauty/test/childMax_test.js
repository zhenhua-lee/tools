var test = require('tape')
var mx = require('../childMax');

test('max', function (t) {
  var arr = [-2, 5, 3, -6, 4, -8, 6]
  var arr2 = [-2, 5, 3, -6, 4, 3, -2];
  var arr3 = [1, 2, 3, 4, 5];
  var arr4 = [-10, -2, -3, -4, -5];
  t.equal(mx.method1(arr), 8);
  t.equal(mx.method1(arr2), 9);
  t.equal(mx.method1(arr3), 15);
  t.equal(mx.method1(arr4), -2);
  t.end();
})

test('max method2', function (t) {
  var arr = [-2, 5, 3, -6, 4, -8, 6]
  var arr2 = [-2, 5, 3, -6, 4, 3, -2];
  var arr3 = [1, 2, 3, 4, 5];
  var arr4 = [-10, -2, -3, -4, -5];
  t.equal(mx.method2(arr), 8);
  t.equal(mx.method2(arr2), 9);
  t.equal(mx.method2(arr3), 15);
  t.equal(mx.method2(arr4), -1);
  t.end();
})