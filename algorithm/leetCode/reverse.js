/*
 * 整数的反转
 * https://leetcode.com/problems/reverse-integer/
 * 错误的地方：考虑问题过于简单，没有考虑特殊情况
 * 1. 100、1000
 * 2. 反转后，数值溢出本身长度怎么办？
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (typeof x !== 'number') return;
  if (x > Math.pow(2, 32)) return 0;
  if (x === 0) return x;
  if (x < 0) return parseInt('-' + reverse(-x), 10);
  var aa = x.toString().split('').reverse();

  // 防止数据溢出
  var max = Math.pow(2, 32).toString().split('');

  if (aa.length < max.length) {
    return +aa.join('');
  } else {
    var flag = false, equal = false;
    for(var i=0; i<aa.length; i++) {
      if (aa[i] < max[i]) {
        flag = true;
        break;
      } else if (aa[i] > max[i]){
        // flag = false
        break;
      }
    }
    if (flag) return +aa.join('')
    return 0;
  }
};

console.log(reverse(1));
console.log(reverse(0));
console.log(reverse(-123));
console.log(reverse(100));
console.log(reverse(1000000009));
console.log(reverse(4294967292));
