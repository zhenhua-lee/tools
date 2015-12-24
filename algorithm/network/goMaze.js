/*
 * 走迷宫问题
 * 方法1：以是否访问过该点为基准，访问过就标示，下次不能再访问，但是当发现访问了该点，就不能再走了，那么就需要回退
 */
function maze(path, x, y, m, n) {
  if (path[x][y] === 0) {
    path[x][y] = 1;
    if (path[m][n] === 0) {
      if (!(maze(path, x-1, y, m, n) || maze(path, x+1, y, m, n) || maze(path, x, y-1, m, n) || maze(path, x, y+1, m, n))){
        path[x][y] = 0;
      }
    }
  }
  return path[m][n];
}

var path = [
  [2, 2, 2, 2, 2, 2],
  [2, 0, 2, 0, 2, 2],
  [2, 0, 0, 0, 2, 2],
  [2, 2, 2, 0, 0, 2],
  [2, 0, 2, 2, 0, 2],
  [2, 2, 2, 2, 2, 2],
];
var n = maze(path, 1, 1, 4, 4);
console.log(n)
console.log(path)

// 只是简单的变形
function maze2(path, x, y, m, n) {
  var lenX = path[0].length, lenY = path.length;
  if (path[x][y] === 0) {
    path[x][y] = 1;
    if (path[m][n] === 0) {
      if ( !( (x-1>=0 && maze2(path,x-1, y, m, n)) ||  (x+1<lenX && maze2(path,x+1, y, m, n)) || (y-1>=0 && maze2(path, x, y-1, m, n)) || (x+1<lenY && maze2(path, x, y+1, m, n))) ) {
        path[x][y] = 0;
      }
    }
  }
  return path[m][n];
}

var path2 = [
  [0, 2, 0, 2],
  [0, 0, 0, 2],
  [2, 2, 0, 0],
  [0, 2, 2, 0],
];
var n = maze2(path2, 0, 0, 3, 3);
console.log(n)
console.log(path2);

// 获取具体行走路线
var result = [];
function getPath(path, x, y, m, n) {
  var lenX = path[0].length, lenY = path.length;

  result.push([x, y]);
  path[x][y] = 0;
  if (x == m && y == n) return result;

  if (x-1>=0 && path[x-1][y] === 1) {
    getPath(path, x-1, y, m, n);
  }
  if (x+1<lenX && path[x+1][y] === 1) {
    getPath(path, x+1, y, m, n);
  }
  if (y-1>=0 && path[x][y-1] === 1) {
    getPath(path, x, y-1, m, n);
  }
  if (y+1<lenY && path[x][y+1] === 1) {
    getPath(path, x, y+1, m, n);
  }

}
getPath(path2, 0, 0, 3, 3)
console.log(result)




