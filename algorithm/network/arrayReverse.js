/*
 * 给定数组和一个整数k，把最后k个移动到最前面
 */
// 时间复杂为k*n
function method1(arr, k) {
  var len = arr.length;
  var i;
  while(k) {
    var temp = arr[len-1];
    for (i=len-2; i>=0; i--) {
      arr[i+1] = arr[i];
    }
    arr[0] = temp
    k--;
  }
  return arr;
}

// 使用子数组的交换方法
function method2(arr, k) {
  var len = arr.length;
  reverse(arr, 0, len-k-1);
  reverse(arr, len-k, len - 1);
  reverse(arr, 0, len-1);
  return arr
}
function reverse(arr, begin, end) {
  var temp;
  while(begin < end) {
    temp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = temp;
    begin++;
    end--;
  }
  console.log('arr: ', arr)
  return arr
}

module.exports = {
  method1: method1,
  method2: method2
};

