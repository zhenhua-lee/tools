/*
 * 求两个整数的最大公约数
 *
 */

// 比较笨的逐个比较方法
function getMaxCommonDivisor(a, b) {
  var result;
  var end = (Math.min(a, b) >> 1);
  for (var i=end; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return result = i;
    }
  }

  return result;
}

// 经典地辗转相除法
function getMaxCommon(a, b) {
  var m = Math.max(a, b),
    n = Math.min(a, b);
  return continueMod(m, n);
}
function continueMod(b, s) {
  var c = b % s;
  if (c === 0) return s;
  return continueMod(s, c);
}

// 问题转换: x、y有最大公约数c，那x-y、y的最大公约数也是c
// 这样求解的速度降下来了
function getMaxCommonBySub(a, b) {
  var m = Math.max(a, b),
    n = Math.min(a, b);

  return continueSub(m, n);
}
function continueSub(b, s) {
  if (s === 0) return b;
  var c = b-s;
  var max = Math.max(s, c),
    min = Math.min(s, c);
  return continueSub(max, min);
}

// 对于较大的数，相除的复杂度较高，相减速度又太慢，那么可以将位运算参与进来
function getMaxCommonByBit(a, b) {
  if (b === 0) return a;
  if (a < b) {
    return getMaxCommonByBit(b, a);
  } else {
    if (isEven(a)) {
      if (isEven(b)) {
        return getMaxCommonByBit(a>>1, b>>1)<<1;
      } else {
        return getMaxCommonByBit(a>>1, b);
      }
    } else {
      if(isEven(b)) {
        return getMaxCommonByBit(a, b>>1);
      } else {
        return getMaxCommonByBit(b, a-b);
      }
    }
  }
}
function isEven(a) {
  return a %2 === 0;
}

module.exports = {
  method1: getMaxCommonDivisor,
  method2: getMaxCommon,
  method3: getMaxCommonBySub,
  method4: getMaxCommonByBit,
}
