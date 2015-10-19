/*
 * 插入排序：数组左边已经有序，然后将右边的数根据大小插入左边的有序数组内
 * 时间复杂度：已经排好序，则只需要比较n-1次；逆序的情况下，则需要比较n(n-1)/2次
 * 总体来说，时间复杂度为O(n^2)，小规模问题可以使用这种算法
 * 空间复杂度：O(1)
 * https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F
 */
function insertSort(arr) {
  var len = arr.length;
  for(var i=1; i< len; i++) {
    var temp = arr[i];
    for(var j=i-1; j>=0 && (arr[j] > temp); j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}
module.exports = insertSort;
