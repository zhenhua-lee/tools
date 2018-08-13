/*
 * 快速排序算法：采用分治法，将复杂问题逐渐分解
 * 时间复杂度：最差情况下，数列是有序的，分成两组后，一组为空，这样需要进行n次，而每次需要遍历n次，这样时间
 * 复杂度为O(n^2)，平均情况下是O(n*log2n)
 * 空间复杂度: O(nlog2n)、最坏情况下O(n)
 * 稳定性：稳定(空间复杂度不为o(1)时)
 * https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;

  var boundary = arr.shift();
  var leftArr = [], rightArr = [];
  arr.forEach(function (item) {
    if (item < boundary) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  });
  return quickSort(leftArr).concat([boundary], quickSort(rightArr));
}

module.exports = quickSort;
