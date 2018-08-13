/*
 * 问题：有三个石头，体积为3、4、5，价值分别为12、10、20，背包体积给10，请最大价值
 * 使用动态规划来解决背包问题
 * 分析：题目目标值是最大价值，约束条件有两个：1.包的体积 2.石头的价值
 *      那么就这显然是一个二维的动态规划问题，变量1为包的体积，变量2为石头的规模
 *      因此问题转变为d(i, j)，i为前i个石头，j为剩余体积
 *      初始条件：d(i, 0) = 0, d(0, j) = 0
 */

function solvebag(infoArr, maxV) {
  var temp = [];
  var len = infoArr.length;

  for(var i=0; i<=len; i++) {
    temp[i] = [];
    for (var j=0; j<=maxV; j++) {
      if (i === 0 || j === 0) {
        temp[i][j] = 0;
      } else {
        var item = infoArr[i-1];
        if (j-item.v >=0) {
          temp[i][j] = Math.max(temp[i-1][j], temp[i-1][j - item.v] + item.val);
        } else {
          temp[i][j] = temp[i-1][j];
        }
      }
    }
  }

  var plan = [];
  for(var k=len; k>0; k--) {
    if (temp[k][j-1] > temp[k-1][j-1]) {
      plan[k-1] = 1;
      j -= infoArr[k-1].v;
    } else {
      plan[k-1] = 0;
    }
  }
  return {maxVal: temp[len][maxV], plan: plan};
}

module.exports = solvebag;
