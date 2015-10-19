/*
 * 几种常见排序算法的测试用例
 * 快速排序、选择排序、冒泡排序
*/
var test = require('tape');
var assign = require('object-assign');

var quickSort = require('../quick.js');
var selectSort = require('../select.js');
var bubbleSort = require('../bubble.js');
var insertSort = require('../insert.js');
var shellSort = require('../shell.js');

test('quick sort', (t) => {
  var arr = [10, 2, 3, 5, 1, 32, 0, -23];
  var expectArr = assign([], arr);
  expectArr.sort(function (m, n) {
    return m > n;
  });
  t.deepEqual(quickSort(arr), expectArr)

  t.deepEqual(quickSort([1]), [1]);
  t.deepEqual(quickSort([-1]), [-1]);
  t.end();
});

test('select sort', (t) => {
  var arr = [10, 2, 3, 5, 1, 32, 0, -23];
  var expectArr = assign([], arr);
  expectArr.sort(function (m, n) {
    return m > n;
  });
  t.deepEqual(selectSort(arr), expectArr)

  t.deepEqual(selectSort([1]), [1]);
  t.deepEqual(selectSort([-1]), [-1]);
  t.end();
});

test('bubble sort', (t) => {
  var arr = [10, 2, 3, 5, 1, 32, 0, -23];
  var expectArr = assign([], arr);
  expectArr.sort(function (m, n) {
    return m > n;
  });
  t.deepEqual(bubbleSort(arr), expectArr)

  t.deepEqual(bubbleSort([1]), [1]);
  t.deepEqual(bubbleSort([-1]), [-1]);
  t.end();
});

test('insert sort', (t) => {
  var arr = [10, 2, 3, 5, 1, 32, 0, -23];
  var expectArr = assign([], arr);
  expectArr.sort(function (m, n) {
    return m > n;
  });
  t.deepEqual(insertSort(arr), expectArr);

  t.deepEqual(insertSort([1]), [1]);
  t.deepEqual(insertSort([-1]), [-1]);
  t.end();
});

test('shell sort', (t) => {
  var arr = [10, 2, 3, 5, 1, 32, 0, -23];
  var expectArr = assign([], arr);
  expectArr.sort(function (m, n) {
    return m > n;
  });
  t.deepEqual(shellSort(arr), expectArr);

  t.deepEqual(shellSort([1]), [1]);
  t.deepEqual(shellSort([-1]), [-1]);
  t.end();
});

