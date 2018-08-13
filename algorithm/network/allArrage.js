/*
 * 全排列问题
 * 运用递归的方法，降低问题的规模，不断降低问题规模，当只剩一个元素时，就返回其本身
 */
var deepcopy = require('deepcopy');

function arrageAll(arr) {
  // if (!arr.push) return console.error('argument shoud be array');
  if (!arr.push) throw new Error('arguments shoud be array');
  if (arr && arr.length < 2) return arr;
  var len = arr.length;
  var result = [];

  for (var i=0; i<len; i++) {
    // 除当前元素外的剩余元素
    var subArr = [];
    arr.forEach(function (item ,index) {
      if (index !== i) {
        subArr.push(item);
      }
    });

    // 递归得到结果数组
    var subResult = arrageAll(subArr);
    var currentResult = subResult.map(function (item) {
      return arr[i] + item;
    });
    result = result.concat(currentResult);
  }
  return result;
}

module.exports = arrageAll;
