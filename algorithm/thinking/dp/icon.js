/*
 * 硬币问题：1、3、5三种硬币，问总和为11，最少需要多少
 * 一维动态规划问题
*/
// 思路：这种题目，可以将复杂问题缩小为简单问题，例如求2元，但是这不是等比的缩小，
// 因为因为从2到11不是简单的规模方法，需要有一定的阶梯，因此可以选择动态规划来解决
// 这样状态就是总计(i)

// 这种问题可以采用从上让下计算，但是这种问题存在重复计算
 //                              d[10]
 //               |                |                     |
 //            d[9]+1         d[7]+1                d[5] + 1
 //        |       |   |       |    |    |           |     |     |
 //      d[8]    d[6] d[4]    d[6] d[4] d[2]      d[4]    d[2]  d[0]
 //  |     |   |
 // d[7] d[5] d[3]
function icon1(arr, total) {
  if (total === 0) {
    return 0;
  }
  if (total-arr[2] >=0) {
    return min(icon1(arr, total-arr[0]) + 1, icon1(arr, total-arr[1]) + 1, icon1(arr, total-arr[2]) + 1);
  } else if (total-arr[1] >=0){
    return min(icon1(arr, total-arr[0]) + 1, icon1(arr, total-arr[1]) + 1);
  } else if (total-arr[0] >=0) {
    return icon1(arr, total-arr[0]) + 1;
  }
}

function min(a, b, c) {
  return Math.min.apply(this, arguments)
}

// 为了避免重复计算，可以用空间来换取时间，也就是从低往上进行计算
function icon2(arr, total) {
  var temp = [];
  for(var i=0; i<=total; i++) {
    var minVal;
    if (i===0) {
      temp[i] = 0;
    } else {
      if (i - arr[2] >=0) {
        minVal = min(temp[i-arr[0]] + 1, temp[i-arr[1]] + 1, temp[i-arr[2]] + 1);
      } else if (i - arr[1] >= 0) {
        minVal = min(temp[i-arr[0]] + 1, temp[i-arr[1]] + 1);
      } else {
        minVal = temp[i-arr[0]] + 1;
      }
      temp[i] = minVal;
    }
  }
  return temp[total];
}

module.exports = {
  method1: icon1,
  method2: icon2,
}