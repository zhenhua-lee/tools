var test = require('tape');
var moreHalf = require('../moreHalf.js')

test('the number which more than falf', (t) => {
  t.equal(moreHalf.method1([1, 3, 2, 1, 1, 0, 1, 1]), 1);
  t.equal(moreHalf.method1([3, 1, 2, 1, 1, 0, 1, 1]), 1);
  t.equal(moreHalf.method1([1, 1]), 1);
  t.end();
});
