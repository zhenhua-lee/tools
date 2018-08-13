/*
 * 折半查找算法
*/
function findByHalf(arr, num) {
  var start = 0,
    end = arr.length;

  while(start <= end) {
    var mid = (start + end) >> 1;
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
}

module.exports = findByHalf;
