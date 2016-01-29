var test = require('tape');
var icon = require('./icon.js');

test('get max icon', function(t) {
  var arr = [1, 3, 5], total=38;

  t.equal(icon.method2(arr, total), 3);
  t.end();
})