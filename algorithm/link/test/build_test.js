var test = require('tape');
var buildLink = require('../build.js');

test('build link', function(t) {
  var head = buildLink();

  t.equal(head.next.data, 1);
  t.equal(head.next.next.data, 2);
  t.equal(head.next.next.next.data, 3);
  t.equal(head.next.next.next.next.data, 4);
  t.equal(head.next.next.next.next.next.data, 5);
  t.equal(head.next.next.next.next.next.next, null);

  t.end();
});
