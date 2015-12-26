/*
 * 装硬币问题: 存在25、10、5、1四种币值，求总值为63的情况下，最少的硬币数量
 */

//  使用动态规划进行求解
function dp (total, proc) {
  if (total <= 0) return proc[0] = 0;
  if (proc[total]) return proc[total];

  var temp1, temp2, temp3, temp4;
  if (total - 25 >=0) {
    temp1 = dp(total - 25, proc) + 1;
  }
  if (total - 10 >= 0) {
    temp2 = dp(total - 10, proc) + 1;
  }
  if (total - 5 >= 0) {
    temp3 = dp(total - 5, proc) + 1;
  }
  if (total - 1 >= 0) {
    temp4 = dp(total - 1, proc) + 1;
  }

  var min = total + 10;
  if (temp1 && temp1 < min) min = temp1;
  if (temp2 && temp2 < min) min = temp2;
  if (temp3 && temp3 < min) min = temp3;
  if (temp4 && temp4 < min) min = temp4;

  proc[total] = min;
  return min;
}
function getMount(begin, proc) {
  var result = [0, 0, 0, 0];
  while(begin) {
    if (proc[begin] === proc[begin-25] + 1) {
      result[0] += 1;
      begin -= 25;
    } else if (proc[begin] === proc[begin - 10] + 1) {
      result[1] += 1;
      begin -= 10;
    } else if (proc[begin] === proc[begin - 5] + 1) {
      result[2] += 1;
      begin -= 5;
    } else if (proc[begin] === proc[begin - 1] + 1) {
      result[3] += 1;
      begin -= 1;
    }
  }
  return result;
}
module.exports = {
  dp: dp,
  getMount: getMount,
  greed: greed,
}

// 下面使用贪心算法求解
function greed(total) {
  var result = [0, 0, 0, 0];
  while (total) {
    if (total >= 25) {
      result[0] = Math.floor(total/25);
      total %= 25;
    } else if (total >= 10) {
      result[1] = Math.floor(total/10);
      total %= 10;
    } else if (total >= 5) {
      result[2] = Math.floor(total/5);
      total %= 5;
    } else {
      result[3] = total;
      total = 0;
    }
  }
  return result;
}

console.log(greed(63))
