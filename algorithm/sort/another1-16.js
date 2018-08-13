// 再次复习五种常见排序算法

// 时间复杂度n^2, 是稳定排序
// 冒泡排序
function buddleSort(arr) {
  if (!arr) return null;
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('should input array');
  }
  var i, j, len = arr.length;
  var temp;
  for(i=0; i < len-1; i++) {
    for(j=0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

var arr = [123, 343,2, -2, 12, 200, 23];
console.log('buddleSort: ', buddleSort(arr));

// 选择排序
// 时间复杂度: n^2，是不稳定排序
function selectSort(arr) {
  var i, j;
  var len = arr.length;
  var index, min, temp;

  for(i=0; i<len - 1; i++) {
    index = i;
    min = arr[i];
    for(j=i+1; j<len; j++) {
      if (min > arr[j]) {
        index = j;
        min = arr[j];
      }
    }
    temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
var arr = [123, 343,2, -2, 12, 200, 23];
console.log('selectSort: ', selectSort(arr));

// 时间复杂度n*logn，最好情况下为log2n, 最坏为n^2
// 至于是否稳定，看是否需要额外的存储空间,这种情况下是稳定的
function quickSort(arr) {
  if (Object.prototype.toString.call(arr) === '[object Array]' && arr.length < 2) {
    return arr;
  }
  var leftArr = [], rightArr = [];
  var middle = arr[0], len=arr.length, i;
  for(i=1; i<len; i++) {
    if (arr[i] > middle) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat([middle], quickSort(rightArr));
}
var arr = [123, 343,2, -2, 12, 200, 23, 0];
console.log('quickSort: ', quickSort(arr));

// 插入排序
// 时间复杂度：n^2， 是稳定排序
function insertSort(arr) {
  var len = arr.length, i, j;
  var temp;
  for(i=1; i<len; i++) {
    var temp = arr[i];
    for(j=i-1; j>=0; j--) {
      if (temp < arr[j]) {
        arr[j+1] = arr[j];
      } else {
        break;
      }
    }
    arr[j+1] = temp;
  }
  return arr;
}
var arr = [123, 343, 2, -2, 12, 200, 23, 0];
console.log('insertSort: ', insertSort(arr));

// 希尔排序
// 时间复杂度：n^1.25, 不稳定排序
function shellSort(arr) {
  var len = arr.length;
  var temp;
  for(var step = len >> 1; step > 0; step >>= 1) {
    for(var i=step; i<len; i++) {
      temp = arr[i];
      for (var j=i-step; j>=0; j-=step) {
        if (temp < arr[j]) {
          arr[j+step] = arr[j];
        } else {
          break;
        }
      }
      arr[j+step] = temp;
    }
  }
  return arr;
}
var arr = [123, 343, 2, -2, 12, 200, 23, 0, 1];
console.log('shellSort: ', shellSort(arr));

// 归并排序
// 时间复杂度: nlogn, 稳定排序
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  var len = arr.length;
  var mid = len >> 1;
  return mergeArr( mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)) );
}
function mergeArr(arr1, arr2) {
  if (arr1.length === 0 && arr2.length ===0) return [];
  var result = [];
  var len1 = arr1.length, len2 = arr2.length;
  var i=0, j=0;
  while(i<len1 && j<len2) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i<len1) {
    return result.concat(arr1.slice(i));
  }
  if (j<len2) {
    return result.concat(arr2.slice(j));
  }
}
var arr = [123, 343, 2, -2, 12, 200, 23, 0, 1, 120];
console.log('mergeSort: ', mergeSort(arr));

// 归并排序的非递归实现
function mergeSortNotReverse(arr) {
  var len = arr.length;
  var result = [];
  for (var step = 1; step < len; step <<= 1) {
    for(var i=0; i<len; i += step*2) {
      var start1 = i, end1 = Math.min(i + step, len);
      var start2 = Math.min(i + step, len), end2 = Math.min(i+step*2, len);
      while (start1<end1 && start2<end2) {
        if (arr[start1] < arr[start2]) {
          result.push(arr[start1]);
          start1++
        } else {
          result.push(arr[start2]);
          start2++;
        }
      }
      if (start1 < end1) {
        result = result.concat(arr.slice(start1, end1));
        continue;
      }
      if (start2 < end2) {
        result = result.concat(arr.slice(start2, end2));
      }
    }
    arr.splice(0, len);
    while(result.length) {
      arr.push(result.shift())
    }
  }
  return arr;
}
var arr = [123, 343, 2, -2, 12, 200, 23, 0, 1, 120];
console.log('mergeSortNotReverse: ', mergeSortNotReverse(arr));

// 堆排序
// 时间复杂度: nlogn, 不稳定排序
function heapSort(arr) {
  buildHeap(arr);

  var result = [];
  while (arr.length) {
    result.unshift(arr[0]);
    swap(arr, 0, arr.length-1);
    arr.splice(-1, 1);
    buildHeap(arr);
  }
  return result;
}
function buildHeap (arr, begin) {
  var len = arr.length;
  if (!begin) {
    begin = len >> 1;
  }
  while (begin >= 0) {
    var max = begin, left = 2*begin + 1, right = 2*begin + 2;
    if (left < len && arr[max] < arr[left]) {
      max = left;
    }
    if (right < len && arr[max] < arr[right]) {
      max = right;
    }
    if (max !== begin) {
      swap(arr, begin, max);
      buildHeap(arr, max);
    }
    --begin;
  }
}
function swap(arr, m, n) {
  var temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
}
var arr = [123, 343, 2, -2, 12, 200, 23, 0, 1, 120];
console.log('heapSort: ', heapSort(arr));


