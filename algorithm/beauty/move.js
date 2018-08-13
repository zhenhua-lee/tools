/*
 * 数组循环移位，均向后移动k位
 */

// 直接移动，则时间复杂度为o(k*n)
function moveArray(arr, k) {
  k %= arr.length;
  while(k) {
    var len = arr.length;
    var t = arr[len-1];
    for(var i=len-2; i>=0; i--) {
      arr[i+1] = arr[i];
    }
    arr[0] = t;
    k--;
  }
  return arr;
}

// 其中数组可以分为两部分：一部分是没有越界的；另一部分是越界部分
function moveArray2(arr, k) {
  var len = arr.length;
  k %= len;
  reverse(arr, 0, len - 1 - k);
  reverse(arr, len - k, len - 1);
  reverse(arr, 0, len - 1);
  return arr;
}
function reverse(arr, start, end) {
  var temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

module.exports = {
  method1: moveArray,
  method2: moveArray2,
}
