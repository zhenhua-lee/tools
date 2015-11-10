/*
 * 电话号码里面的数字对应着0、3、4个字母，将其转换成单词
 * 这其实是一个遍历技巧问题，通过使用递归，将遍历问题转换为递归问题
 * 启发：其实遍历问题与递归问题是可以相互转换的
 */

var num2Char = [
  ['0'],
  ['1'],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

function trans(numArr) {
  // 存储数字对应哪个字母
  var result = [];
  reverseMap(numArr, [], 0, result);
  return result;
}

function reverseMap(arr, anwser, index, result) {
  if (index === arr.length) {
    var temp = '';
    for(var i=0; i<arr.length; i++) {
      temp += (num2Char[arr[i]][anwser[i]]);
    }
    result.push(temp);
    return;
  }
  var num = arr[index];
  var numLen = num2Char[num].length;
  for(anwser[index]=0; anwser[index]<numLen; anwser[index]++) {
    reverseMap(arr, anwser, index + 1, result);
  }
}

module.exports = trans;

