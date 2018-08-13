/*
 * 斐波那契数列的计算
 * http://www.cnblogs.com/xwdreamer/archive/2012/05/15/2501606.html
 * 三种算法：1.递归 2.数组缓存过程，避免重复计算 3.对2进行优化，降低空间复杂度
 * 编程之美中还提供了分治策略，但是没有看明白，待完善
 */
function fibo1(n) {
  return n > 1 ? fibo1(n - 1) + fibo1(n - 2) : 1;
}

function fibo2(n) {
  var arr = [];
  var i;
  for (i = 0; i < n + 1; i++) {
    arr[i] = (i > 1 ? arr[i - 1] + arr[i - 2] : 1);
  }
  return arr[n];
}

function fibo3(n) {
  var before = 1;
  var beforeBefore = 1;
  var i, result;
  for (i = 2; i < n + 1; i++) {
    result = before + beforeBefore;
    beforeBefore = before;
    before = result;
  }
  return n > 1 ? result : 1;
}

module.exports = {
  recursion: fibo1,
  arr: fibo2,
  before: fibo3,
};

/*
 * 算法延伸推广
 * 1. 青蛙跳台阶问题：一次可以跳1阶，也可以跳2阶，f(n)有多少种跳法
 */
