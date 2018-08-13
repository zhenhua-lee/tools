var test = require('tape');
var divisor = require('../divisor');

test('get max common divisor', function (t) {
  t.equal(divisor.method1(120, 36), 12);
  t.equal(divisor.method1(12, 7), 1);

  t.equal(divisor.method2(120, 36), 12);
  t.equal(divisor.method2(12, 7), 1);

  t.equal(divisor.method3(120, 36), 12);
  t.equal(divisor.method3(12, 7), 1);

  t.equal(divisor.method4(120, 36), 12);
  t.equal(divisor.method4(12, 7), 1);

  t.end();
});