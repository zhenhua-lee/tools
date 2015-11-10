/*
 * 得到最大、最小数
 */

// 该方法将求最大与最小割裂开来了，没有充分利用二者的比较
function getMaxAndMin(arr) {
  if (arr.length < 1) return new Error('can not be empty array');
  var max = arr[0], min = arr[0];
  var len = arr.length;
  for (var i=0; i<len; i++) {
    if (arr[i] > max) {
      max = arr[i];
      continue;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {max: max, min: min};
}

function getMaxAndMin2(arr) {
  if (arr.length < 1) return new Error('can not be empty array');
  var max = arr[0], min = arr[0];
  var len = arr.length;
  for(var i=0; i<len; i+=2) {
    var m = n = arr[i];
    if (arr[i] > arr[i+1] && i+1 < len) {
      m = arr[i];
      n = arr[i+1];
    } else if (arr[i] < arr[i+1] && i+1 < len) {
      m = arr[i+1];
      n = arr[i];
    }

    if (max < m) {
      max = m;
    }
    if (min > n) {
      min = n;
    }
  }
  return {max: max, min: min};
}

module.exports = {
  method1: getMaxAndMin,
  method2: getMaxAndMin2,
};
