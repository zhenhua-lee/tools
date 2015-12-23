var test = require('tape');
var allArrage = require('../allArrage.js');

test('full arrage', function (t) {

  t.throws(function () { allArrage('no') }, /arguments shoud be array/)
  t.deepEqual(allArrage([]), [])
  t.deepEqual(allArrage(['a']), ['a'])
  t.deepEqual(allArrage(['a', 'b']), ['ab', 'ba'])
  t.deepEqual(allArrage(['a', 'b', 'c']), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);

  t.equal(allArrage(['a', 'b', 'c', 'd']).length, 24)
  t.equal(allArrage(['a', 'b', 'c', 'd', 'e']).length, 120)
  t.equal(allArrage(['a', 'b', 'c', 'd', 'e', 'f']).length, 720)
  t.equal(allArrage(['a', 'b', 'c', 'd', 'e', 'f', 'g']).length, 5040)

  t.end();
})
