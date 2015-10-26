/*
 * 归并排序，采用分支的方法，将大规模问题转换成小规模问题，返回逐渐合并
 * 算法可以采用两种方案：
 * - 迭代版 - 从小到大，不断迭代，直到步长马上要超过数组长度为止
 * - 递归版 - 从大到小，不断递归，不断缩小问题的规模
 * 时间复杂度为：nlog(n)，空间复杂度为：o(n)
 * 稳定性：稳定
 * https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F
 */

// 迭代的方法
function mergeSort(arr) {
  var len = arr.length;
  var temp = [];
  for (var seg=1; seg < len; seg <<= 1) {
    for (var i=0; i<len; i += seg*2) {
      var start = i, mid = Math.min(i+seg, len), high = Math.min(i+seg+seg, len);
      var start1 = start, end1 = mid, start2 = mid, end2 = high;
      while (start1 < end1 && start2 < end2) {
        var val = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
        temp.push(val);
      }
      while(start1 < end1) {
        temp.push(arr[start1++]);
      }
      while(start2 < end2) {
        temp.push(arr[start2++]);
      }
    }
    arr.splice(0, len);
    while(temp.length) {
      arr.push(temp.shift());
    }
  }
  return arr;
}

// 递归的方法
function mergeSortRe(arr) {
  if (arr.length < 2) return arr;
  var start = 0, mid = Math.floor(arr.length/2), end = arr.length;
  var re = mergeArr( mergeSortRe(arr.slice(0, mid)), mergeSortRe(arr.slice(mid)) )
  arr.splice(0, arr.length);
  while(re.length) {
    arr.push(re.shift())
  }
  return arr;
}
function mergeArr (arr1, arr2) {
  var temp = [];
  while(arr1.length && arr2.length) {
    temp.push( arr1[0] < arr2[0] ? arr1.shift() : arr2.shift() );
  }
  return temp.concat(arr1.concat(arr2));
}

module.exports = {
  iterate: mergeSort,
  recursion: mergeSortRe,
};
