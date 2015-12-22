var test = require('tape');
var buildTree = require('../buildTree');

test('test build tree', function(t) {
  var arr = [1, 2, 3, 4, 5, 6];
  var result = {
    data: 1,
    left: {
      data: 2,
      left: {
        data: 4,
        left: null,
        right: null
      },
      right: {
        data: 5,
        left: null,
        right: null
      }
    },
    right: {
      data: 3,
      left: {
        data: 6,
        left: null,
        right: null
      },
      right: null
    }
  }
  t.deepEqual(buildTree(arr), result);

  t.end();
})