/*
 * Dijkstra算法，求最短路径，计算一个节点到其他节点的最短路径
 * 特点是以起始点为中心向外层不断(广度优先搜索思想)，直到拓展到终点为止
 * 单元最短路径算法，要求不存在负权边
*/
// 用邻接矩阵老存储图的结构
// var obj = {
//   vex: Array, // 点的集合
//   vexNum: Number, // 定点的个数
//   edgNum: Number, // 边的数目
//   maxtri: Array(n*n) // 邻接矩阵信息
// }

/*
 * gragh: 矩阵存储结构,只需要是一个二维矩阵就可以，在js中
 * vs: 开始节点
*/
function dij(gragh, vs) {
  var vexNum = gragh[0].length;
  /*
   * flag[i]: 表示节点i是否已经求出vs到该点的最短路径
   * dist[i]: 表示vs到该点的最短长度
   * pre[i]: vs到点i的最短路径中，i的前驱结点
  */
  var flag = [], dist = [];
  for(var i=0; i<vexNum; i++) {
    flag.push(false);
    prev.push(0);
  }
  for(var j=0; j<vexNum; j++) {
    dist[j] = gragh[vs][j];
  }

  for(var i=0; i<vexNum; i++) {
    // 阶段：获得最短路径的接点
    var min = Infinity, k;
    for(var j=0; j<vexNum; j++) {
      if(!flag[j] && dist[j] < min) {
        min = dist[j];
        k = j;
      }
    }
    flag[k] = true; // k:已经获得最短路径

    // 更新最短路径信息
    for (var m=0; m<vexNum; m++) {
      var temp = (gragh[k][m] === Infinity ? Infinity: min + gragh[k][m]);
      if (!flag[m] && temp < dist[m]) {
        dist[m] = temp;
        prev[m] = k; // m的最短距离因为接点k而更新，那么k就是m的前驱节点
      }
    }

  }
}
module.exports = dij;

// http://www.cnblogs.com/skywang12345/p/3711512.html



