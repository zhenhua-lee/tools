/*
 * 2.5 有很多无序的数，求最大的K个数
 * 思路：这是一个类排序算法，只需要进行部分排序就可以了
 * - 思路1：利用快速排序，将数分为两队，只在其中的大数组内查找
 * - 思路2：利用二分法查找，先求出极值，然后在其中折半查找
 * - 思路3：当初始数目较多时，为了减少读取的次数，可以建立一个k个数的堆，每读取一次，比较一次
 * - 思路4：当初始数波动范围不太大的时候，可以使用基数排序
 */

function findMaxK(arr, k) {
  if (k < 1) return [];
  if (arr.length < k || arr.length < 2) {
    return arr;
  }
  var result = [];
  var len = arr.length,
    boundary = arr[0];

  var leftArr = [], rightArr = [];
  for (var i=1; i<len; i++) {
    if (arr[i] < boundary) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  var left = k - rightArr.length;
  if (left < 0) {
    return findMaxK(rightArr, k);
  } else if (left === 0) {
    return rightArr;
  } else if (left === 1) {
    return rightArr.push(boundary);
  } else {
    return rightArr.concat(boundary, findMaxK(leftArr, left -1));
  }
}

module.exports = findMaxK;
