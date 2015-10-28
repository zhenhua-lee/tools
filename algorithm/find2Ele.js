/*
 * 从数组中找出两个元素，使这两个元素的和等于某个数
 *
 */

// 直接进行枚举，算法的时间复杂度为o(n^2)，较高
function method1(arr, sum) {
  var len = arr.length;
  var i, j;
  for(i=0; i<len-1; i++) {
    for(j=i+1; j<len; j++) {
      if ((arr[i] + arr[j]) === sum) {
        return {num1: arr[i], num2: arr[j]};
      }
    }
  }
  return {};
}

// 可以先排序，然后再折半查找
// 时间复杂度为o(nlog2n)
function method2(arr, sum) {
  var quick = require('./sort/quick');
  var sortArr = quick(arr);

  while(sortArr[0] !== undefined) {
    var num1 = sortArr.shift();
    var findByhalf = require('./find/findByhalf');
    if (findByhalf(sortArr, sum-num1) !== null) {
      return {num1: num1, num2: sum - num1};
    }
  }
  return {};
}

// 使用hash的方法，便于数据的查找，通过空间来换取时间
// 时间复杂度为o(n^2)
function findByHash(arr, sum) {
  var obj = {};
  arr.forEach(function(item) {
    if (!obj[item]) {
      obj[item] = true;
    }
  });
  for(var i=0; i<arr.length; i++) {
    if (obj[sum - arr[i]]) {
      return {num1: arr[i], num2: sum - arr[i]}
    }
  }
  return {};
}

// 在确定存在这两个数的前提下，可以先排序，然后使用左右指针进行判断
function findBy2Index(arr, sum) {
  var quick = require('./sort/quick');
  var sortArr = quick(arr);
  var i=0, j=sortArr.length-1;
  while(i<j) {
    var re = sortArr[i] +  sortArr[j];
    if (re === sum) {
      return {num1: sortArr[i], num2: sortArr[j]};
    } else if (re > sum) {
      j--;
    } else {
      i++;
    }
  }

  return {};
}

module.exports = {
  method1: method1,
  method2: method2,
  method3: findByHash,
  method4: findBy2Index,
};
