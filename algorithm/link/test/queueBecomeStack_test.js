var test = require('tape');
var trans = require('../queueBecomeStack.js')();

test('queque used as stack', function (t) {
  trans.push(1);
  trans.push(2);
  trans.push(3);
  trans.push(4);

  t.equal(trans.pop(), 4);
  t.equal(trans.pop(), 3);
  trans.push(5);
  t.equal(trans.pop(), 5);
  t.equal(trans.pop(), 2);
  t.equal(trans.pop(), 1);

  t.end();
});
