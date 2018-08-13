/*
 * 走楼梯问题, 每次可以上1、2、3层楼梯
 * 方法1： 使用遍历的方式，用空间来换取时间
 * 方法2：使用递归的方式
 */

function step(n) {
  var arr = [];
  for(var i=0; i<=n; i++) {
    if (i == 0 ) {
      arr.push(0);
      continue;
    }
    if (i == 1) {
      arr.push(1);
      continue;
    }
    if (i == 2) {
      arr.push(2);
      continue;
    }
    if (i == 3) {
      arr.push(4);
      continue;
    }
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
  }
  return arr[arr.length - 1];
}

function stepWithMethod(n) {
  var arr = [];
  for(var i=0; i<=n; i++) {
    if (i == 0 ) {
      arr.push({num: 0, method: [[]]});
      continue;
    }
    if (i == 1) {
      arr.push({num: 1, method: [[1]]});
      continue;
    }
    if (i == 2) {
      arr.push({num: 2, method: [[1, 1], [2]]});
      continue;
    }
    if (i == 3) {
      arr.push({num: 4, method: [ [1, 1, 1], [1, 2], [2, 1], [3] ]});
      continue;
    }
    arr.push({
      num: arr[i-1].num + arr[i-2].num + arr[i-3].num,
      method: addOneItemToArray(arr[i-1].method, 1).concat(addOneItemToArray(arr[i-2].method, 2), addOneItemToArray(arr[i-3].method, 3))
    });
  }
  return arr[arr.length - 1];
}
/*---------*/

function step2(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (n == 3) return 4;
  return step2(n - 1) + step2(n - 2) + step2(n -3);
}

// 如何求出具体走法呢？
function step2WithMethod(n) {
  if (n == 0) return {num: 0, method: []};
  if (n == 1) return {num: 1, method: [[1]]};
  if (n == 2) return {num: 2, method: [ [1,1], [2] ]};
  if (n == 3) return {num: 4, method: [ [1, 1, 1], [1, 2], [2, 1], [3] ]};

  var m1 = step2WithMethod(n-1), m2 = step2WithMethod(n-2), m3 = step2WithMethod(n-3);
  return {
    num: m1.num + m2.num + m3.num,
    method: addOneItemToArray(m1.method, 1).concat(addOneItemToArray(m2.method, 2), addOneItemToArray(m3.method, 3))
  }
}
function addOneItemToArray(arr, n) {
  return arr.map(function (item) {
    return item.concat([n]);
  })
}
console.log(stepWithMethod(4))
module.exports = step


