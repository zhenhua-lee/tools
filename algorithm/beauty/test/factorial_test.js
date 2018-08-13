var test = require('tape')
var factorial = require('../factorial.js');

test('divide by 5', (t) => {
  t.equal(factorial.method1(1), 0);
  t.equals(factorial.method1(2), 0);
  t.equals(factorial.method1(5), 1);
  t.equals(factorial.method1(10), 2);
  t.equals(factorial.method1(12), 2);
  t.equals(factorial.method1(15), 3);

  t.end();
});

test('divide by 5 more quick', (t) => {
  t.equals(factorial.method1(1), 0);
  t.equals(factorial.method1(2), 0);
  t.equals(factorial.method1(5), 1);
  t.equals(factorial.method1(10), 2);
  t.equals(factorial.method1(12), 2);
  t.equals(factorial.method1(15), 3);

  t.end();
});

test('the mount of low 1', (t) => {
  t.equal(factorial.low1(1), 1);
  t.equal(factorial.low1(2), 2);
  t.equal(factorial.low1(3), 2);
  t.equal(factorial.low1(4), 4);
  t.equal(factorial.low1(5), 4);
  t.end();
});
