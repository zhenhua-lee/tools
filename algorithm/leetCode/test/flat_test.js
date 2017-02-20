var test = require('tape');
var getAllFlat = require('../flat').getAllFlat;

test('flat array', (t) => {
  var arr0 = [1, 2, 3, 4, 5];
  t.deepEqual(getAllFlat(arr0), arr0);

  var arr1 = [1, [2, 3, [4, 5]]];
  t.deepEqual(getAllFlat(arr1), arr0);

  var arr2 = [[1,1],2,[1,1]]
  t.deepEqual(getAllFlat(arr2), [1, 1, 2, 1, 1]);

  var arr3 = [1,[4,[6]]]
  t.deepEqual(getAllFlat(arr3), [1, 4, 6]);

  t.end();
})