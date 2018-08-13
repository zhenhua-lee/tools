/*
 * 求素数(质数)
 * 参考：http://coolshell.cn/articles/3738.html
 * 参考：http://www.cnblogs.com/luluping/archive/2010/03/03/1677552.html
 * 参考：http://blog.csdn.net/program_think/article/details/7032600/
*/
/*
 * 单独求解
*/
function getSuShu(n) {
  var re = [2, 3];
  for(var i=5; i<=n; i += 2) {
    var flag = true;
    for (var j=3; j*j <= i; j+=2) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      re.push(i);
    }
  }
  return re;
}

function isSuShu(n) {
  var l = Math.sqrt(n);
  var flag = true;
  for(i=3; i <= l; i += 2) {
    if(n % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/*
 * 另外一种算法: 拆分利用前面已有的条件，加快查找的效率
 * 思想：1. 一个数不是素数，则必然包含素数因子
 */
function getMaxSushu(n) {
  var prime = [2, 3];
  for (i=5; i<n; i += 2) {
    var sq = Math.floor(Math.sqrt(i));
    var len = prime.length;
    var flag = true;
    for (var j=1; prime[j] <= sq && j < len; j++) {
      if (i % prime[j] === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      prime.push(i);
    }
  }
  return prime;
}

/*
 * 提出法
*/
function  get3(n) {
  var re = [];
  for (var i=2; i<=n; i++) {
    re.push(i);
  }

  for (var i=0; i<=n; i++) {
    var j = i + 1;
    while(j <= n) {
      if (re[j] % re[i] === 0) {
        re.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  return re;
}

module.exports = {
  method1: getSuShu,
  method2: getMaxSushu,
  method3: get3,
};
