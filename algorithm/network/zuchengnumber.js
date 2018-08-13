/*
 * 正整数数组，组成一个最大的正整数
 */
function zucheng(arr) {
  if (!arr) return null;
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('parameter should be array');
  }

  var strArr = [];
  arr.forEach(function (item) {
    strArr.push((item+'').split(''));
  });
  var len = strArr.length, i, j;
  var pos, temp;
  for(i=0; i<len-1; i++) {
    pos = i;
    for(j=i+1; j<len; j++) {
      if (compare(strArr[j], strArr[pos]) > 0) {
        pos = j;
      }
    }
    temp = strArr[i];
    strArr[i] = strArr[pos];
    strArr[pos] = temp;
  }
  return +strArr.reduce((prev, item) => {
    prev += item.join('');
    return prev;
  }, '')
}
function compare(arr1, arr2) {
  var minLen = Math.min(arr1.length, arr2.length);
  var result = 0;
  for(var i=0; i<minLen; i++) {
    if (arr1[i] > arr2[i]) {
      result = 1;
      break;
    } else if (arr1[i] < arr2[i]) {
      result = -1;
      break;
    }
  }
  if (result === 0) {
    if (minLen < arr1.length) {
      result = (arr1[minLen] > arr2[0]) ? 1 : -1;
    } else if (minLen < arr2.length) {
      result = (arr2[minLen] > arr1[0]) ? -1 : 1;
    }
  }
  return result;
}

var arr = [97, 9, 10, 4];
var result = zucheng(arr);
console.log(result);
