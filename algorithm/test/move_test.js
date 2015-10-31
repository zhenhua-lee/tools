var test = require('tape');
var move = require('../move');
var deepcopy = require('deepcopy')

test('move arr k', function(t) {
  var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  t.deepEqual(move.method1(deepcopy(arr), 2), ['f', 'g', 'a', 'b', 'c', 'd', 'e'])
  t.deepEqual(move.method1(deepcopy(arr), 3), ['e', 'f', 'g', 'a', 'b', 'c', 'd'])

  t.deepEqual(move.method2(deepcopy(arr), 2), ['f', 'g', 'a', 'b', 'c', 'd', 'e'])
  t.deepEqual(move.method2(deepcopy(arr), 3), ['e', 'f', 'g', 'a', 'b', 'c', 'd'])

  t.end();
})