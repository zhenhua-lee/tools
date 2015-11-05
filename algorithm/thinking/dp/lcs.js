/*
 * 求解最长公共子序列
 * 使用动态规划：最优子结构、重叠子问题
 */

// 采用从高到低的递归，这样会存在重复计算问题，但是节约了空间
function lcs(arr1, arr2) {
  var len1 = arr1.length, len2 = arr2.length;
  if(!len1 || !len2) {
    return 0;
  }

  if (arr1[len1-1] === arr2[len2-1]) {
    return lcs(arr1.slice(0, -1), arr2.slice(0, -1)) + 1;
  } else {
    return max(lcs(arr1.slice(0, -1), arr2), lcs(arr1, arr2.slice(0, -1)));
  }
}

function max(a, b) {
  return a > b ? a : b;
}

// 使用从低到高的遍历顺序，这样就把中间结果记录下来，用空间换取了时间
function lcs2 (arr1, arr2) {
  var tables = [],
    len1 = arr1.length,
    len2 = arr2.length;

  for (var i=0; i<=len1; i++) {
    tables[i] = [];
    for(var j=0; j<=len2; j++) {
      if (i===0 || j===0) {
        tables[i][j] = 0
      } else if (arr1[i-1] === arr2[j-1]) {
        tables[i][j] = tables[i-1][j-1] + 1;
      } else {
        tables[i][j] = max(tables[i][j-1], tables[i-1][j]);
      }
    }
  }
  return tables[len1][len2];
}

module.exports = {
  method1: lcs,
  method2: lcs2,
};
