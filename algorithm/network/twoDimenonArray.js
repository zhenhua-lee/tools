/*
 * 二维数组，x对应不同y的个数
 * 例如[ [1, 2], [1, 3], [1, 4], [2, 2], [2, 2] ]，得出{1:3, 2:1}
 */
function getNum(arr) {
  var map = {};
  arr.forEach(function (item) {
    var key = item[0];
    if (!map[key]) {
      map[key] = {val: [item[1]], num: 1}
    } else {
      if (map[key].val.indexOf(item[1]) === -1) {
        map[key].val.push(item[1]);
        map[key].num++;
      }
    }
  });
  return Object.keys(map).reduce(function (prev, key) {
    prev[key] = map[key].num;
    return prev;
  }, {})
}
var arr = [ [1, 2], [1, 3], [1, 4], [2, 2], [2, 2], [3, 1], [3, 10]];
var re = getNum(arr);
console.log(re);

