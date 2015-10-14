var test = require('tape');
var fibo = require('../fibo');

test('test fibo using recursion', (t) => {
  t.equal(fibo.recursion(0), 1, 'fibo(0) = 1');
  t.equal(fibo.recursion(1), 1, 'fibo(1) = 1');
  t.equal(fibo.recursion(2), 2, 'fibo(2) = 2');
  t.equal(fibo.recursion(6), 13, 'fibo(6) = 8');
  t.end();
});

test('test fibo using arr cache', (t) => {
  t.equal(fibo.arr(0), 1, 'fibo(0) = 1');
  t.equal(fibo.arr(1), 1, 'fibo(1) = 1');
  t.equal(fibo.arr(2), 2, 'fibo(2) = 2');
  t.equal(fibo.arr(6), 13, 'fibo(6) = 8');
  t.end();
});

test('test fibo using two variables', (t) => {
  t.equal(fibo.before(0), 1, 'fibo(0) = 1');
  t.equal(fibo.before(1), 1, 'fibo(1) = 1');
  t.equal(fibo.before(2), 2, 'fibo(2) = 2');
  t.equal(fibo.before(6), 13, 'fibo(6) = 8');
  t.end();
});

