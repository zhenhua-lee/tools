/*
 * N!中0的个数
 * 问题转换成求能被5整除的数的个数
 * method1：依次与5比较，求出个数
 * method2：最大数除以5，所得整数，表示可以被整除的数的个数
 */

function transToMount5(num) {
  var result = 0;
  for (var i=1; i<num+1; i++) {
    if (i % 5 === 0) {
      result ++;
    }
  }
  return result;
}

function transTo2(num) {
  var result = 0;
  while(num) {
    var n = Math.floor(num / 5);
    result += n;
    num = n;
  }
  return result;
}

/*
 * N!中最低位1的位置
 * 乘以2，相当于左移1位
 * 问题转换成求2的n次方
 */
function factorialLowNumOne(num) {
  var result = 1;
  while(num) {
    num = num >> 1;
    result += num;
  }
  return result;
}

module.exports = {
  method1: transToMount5,
  method2: transTo2,

  low1: factorialLowNumOne,
}