/*
 * 寻找发帖水王
 * 一个数组，存在一个元素，个数超过数组个数的一般，找出该数
 * 将复杂文件简化为小问题，然后再逐步解决这些小问题
 */

function findMoreHalf (arr) {
  var candiate, nTime=0;
  for(var i=0; i<arr.length; i++) {
    if (nTime === 0) {
      candiate = arr[i];
      nTime++;
    } else {
      if (candiate === arr[i]) {
        nTime++;
      } else {
        nTime--;
      }
    }
  }
  return candiate;
}

module.exports = {
  method1: findMoreHalf,
}
