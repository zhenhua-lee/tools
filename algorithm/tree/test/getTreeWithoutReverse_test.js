var test = require('tape');
var build = require('../buildTree');
var gt = require('../getTreeWithoutReverse.js');

test('get date without reverse', function (t) {
  var tree = build([1, 2, 3, 4, 5, 6]);

  t.deepEqual(gt.first(tree), [1, 2, 4, 5, 3, 6]);
  t.deepEqual(gt.second(tree), [4, 2, 5, 1, 6, 3]);
  t.deepEqual(gt.second2(tree), [4, 2, 5, 1, 6, 3]);
  t.deepEqual(gt.third(tree), [4, 5, 2, 6, 3, 1]);
  t.deepEqual(gt.third2(tree), [4, 5, 2, 6, 3, 1]);
  t.deepEqual(gt.level(tree), [1, 2, 3, 4, 5, 6]);
  t.end();
})