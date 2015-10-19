/*
 * 选择排序，原地操作，不需要额外存储空间
 * 时间复杂度为O(n^2)
 * 空间复杂为O(1)
 * https://zh.wikipedia.org/wiki/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F
 */

function selectSort(arr) {
  var len = arr.length;
  for (var i=0; i<len-1; i++) {
    var min = i;
    // 找出i之后最小数的位置
    for(var j=i+1; j<len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // 位置互换，将小的数放到前面
    var temp;
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
module.exports = selectSort;
