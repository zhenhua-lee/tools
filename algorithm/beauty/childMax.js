/*
 * 求子数组的和最小
 */
// 遇到一个陌生的问题，首先想到的是使用最朴素的方法
function fetchMaxChild(arr) {
  var max = arr[0];
  var len = arr.length;
  for(var i=0; i<len; i++) {
    var temp = 0;
    for (var j=i; j<len; j++) {
      temp += arr[j];
      if (temp > max) {
        max = temp;
      }
    }
  }

  return max;
}

// 使用动态规划的方法求解子数组的最大值
function fetchMaxByDp(arr) {
  var len = arr.length;
  var start = [arr[0]];
  var max = [arr[0]]
  for (var i=1; i<len; i++) {
    start[i] = Math.max(arr[i], arr[i] + start[i-1]);
    max[i] = Math.max(start[i], max[i-1]);
  }

  // 求子数组
  var begin, end;
  end = max.indexOf(max[len-1]);
  var k = end;
  while(k >= 0) {
    if (start[k] === arr[k]) {
      begin = k;
      break;
    }
    k--;
  }

  // return {
  //   max: max,
  //   start: start,
  //   begin: begin,
  //   end: end
  // };
  return max[max.length - 1];
}

module.exports = {
  method1: fetchMaxChild,
  method2: fetchMaxByDp,
};
