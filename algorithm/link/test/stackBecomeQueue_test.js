var test = require('tape');
var s2q = require('../stackBecomeQueue.js')();

test('using two stacks as queue', function (t) {
  s2q.Enqueque(1);
  s2q.Enqueque(2);
  s2q.Enqueque(3);
  s2q.Enqueque(4);
  t.equal(s2q.Dequeue(), 1)
  s2q.Enqueque(5);
  t.equal(s2q.Dequeue(), 2)
  t.equal(s2q.Dequeue(), 3)
  t.equal(s2q.Dequeue(), 4)
  t.equal(s2q.Dequeue(), 5)
  // t.throw(s2q.Dequeue())

  t.end();
})