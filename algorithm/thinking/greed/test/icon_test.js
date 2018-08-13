var test = require('tape');
var icon = require('../icon');

test('about icon', function (t) {
  var proc = {};

  t.equal(icon.dp(63, proc), 6);
  t.deepEqual(icon.getMount(63,proc), [2, 1, 0, 3])
  t.deepEqual(icon.greed(63), [2, 1, 0, 3])

  t.end();
})
