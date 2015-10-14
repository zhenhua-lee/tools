/*
 * 斐波那契数列的计算
 * http://www.cnblogs.com/xwdreamer/archive/2012/05/15/2501606.html
 */
function fibo1(n) {
  return n > 1 ? fibo1(n-1) + fibo1(n-2) : 1;
}

function fibo2(n) {
  var arr = [];
  var i;
  for(i=0; i < n+1; i++) {
    arr[i] = (i > 1 ? arr[i-1] + arr[i-2] : 1);
  }
  return arr[n];
}

function fibo3(n) {
  var before = 1;
  var beforeBefore = 1;
  var i, result;
  for (i=2; i<n+1; i++) {
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
