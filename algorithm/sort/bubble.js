/*
 * 冒泡排序：边比较边交换，一次遍历找到最大的元素，移动到最后端
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(1)
 * https://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F
 */

function bubbleSort(arr) {
  var len = arr.length;
  for(var i=0; i<len-1; i++) {
    for(var j=0; j<len-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        var temp;
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
module.exports = bubbleSort;
