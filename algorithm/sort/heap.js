/*
 * 堆排序算法：利用完全二叉树的特点，对大规模数据进行排序，这里面用到了递归处理
 * 结果为从小到大，应该构建大顶堆；结果为从大到小，应该构建小顶堆
 * 时间复杂度为o(nlogn)
 * 稳定性：不稳定
 * https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F
 * http://blog.csdn.net/hkx1n/article/details/3922249
 */

function heapSort(arr) {
  buildBigHeap(arr);
  for (var i = arr.length - 1; i>=0; i--) {
    swap(arr, i, 0);
    heapAjust(arr, 0, i);
  }
  return arr;
}

function buildBigHeap(arr) {
  var start = arr.length >> 1;
  for(i=start; i>=0; i--) {
    heapAjust(arr, i, arr.length);
  }
}

function heapAjust(arr, index, end) {
  var left = 2*index + 1;
  var right = 2*index + 2;
  var max = index;

  if (left < end && arr[left] > arr[max]) {
    max = left;
  }
  if (right < end && arr[right] > arr[max]) {
    max = right;
  }

  if (max != index) {
    swap(arr, index, max);
    heapAjust(arr, max, end);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = heapSort;
