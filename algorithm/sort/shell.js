/*
 * 希尔排序：是对插入排序的改进，通过引入步长，将大数组按照步长间隔分割为小数组
 * 然后在小数组内使用插入排序，然后逐渐减小步长，知道步长为1，按成排序
 * 时间复杂度：O(n^1.2)
 * 空间复杂度：O(1)
 */
function shellSort(arr) {
  var len = arr.length;
  for(var gap=len >>1; gap>0; gap >>=1) {
    for(var i=gap; i<len; i++) {
      var temp = arr[i];
      for(var j=i-gap; j>=0&&(arr[j] > temp); j -= gap) {
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = temp;
    }
  }
  return arr;
}
module.exports = shellSort;
