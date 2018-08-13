/*
 * 在3、7、11、17、23三个位置各存在一个蚂蚁，方向存在向左、向右，碰头则均调转方向
 * 求蚂蚁都离开木杆的最长、最短时间
 */

function antAllLeave() {
  var pos = [3, 7, 11, 17, 23];
  var result = [];
  for(var m1=0; m1<2; m1++) {
    for (var m2=0; m2<2; m2++) {
      for(var m3=0; m3<2; m3++) {
        for(var m4=0; m4<2; m4++) {
          for(var m5=0; m5<2; m5++) {
            var dir = [];
            dir.push(getDir(m1));
            dir.push(getDir(m2));
            dir.push(getDir(m3));
            dir.push(getDir(m4));
            dir.push(getDir(m5));

            var copyPos = pos.concat([]);
            result.push(countTime(copyPos, dir));
          }
        }
      }
    }
  }

  return result;
}

function getDir(n) {
  return n === 0 ? 1 : -1;
}

function countTime(pos, dir) {
  var n = 0
  while(!isAllLeave(pos)) {
    n++;
    pos = pos.map(function (item, index, arr) {
      if (item === -1) return item;

      var aa = item + dir[index];
      // 已经离开边沿
      if (aa === 0 || aa === 27) {
        return -1;
      }

      if (index !== 0) {
        // 与前一只蚂蚁相遇，则切换方向
        if (aa === arr[index - 1]) {
          dir[index] = - dir[index];
          dir[index-1] = - dir[index-1];
        }
      }
      return aa;
    });
  }

  return n;
}

function isAllLeave(arr) {
  var flag = true;
  arr.forEach(function (item) {
    if (item !== -1) flag = false;
  });
  return flag;
}

console.log(antAllLeave())



