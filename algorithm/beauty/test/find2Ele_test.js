var test = require('tape');
var obj = require('../find2Ele');

test('find two elements', function(t) {
  var arr = [21, 3, 43, 54, 31, 3, 4, 0];
  var sum = 57;
  var re = obj.method1(arr, sum);
  t.equal( obj.method1(arr, sum).num1+ obj.method1(arr, sum).num2, 57);
  t.equal( obj.method2(arr, sum).num1+ obj.method2(arr, sum).num2, 57);
  t.equal( obj.method3(arr, sum).num1+ obj.method3(arr, sum).num2, 57);
  t.equal( obj.method4(arr, sum).num1+ obj.method4(arr, sum).num2, 57);

  t.end();
})
