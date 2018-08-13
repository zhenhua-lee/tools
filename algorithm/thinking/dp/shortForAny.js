/*
 * 用佛洛依德算法解决任意两点之间的最短路径问题
 * 其实还是用的动态规划的思想：i-->j两个点的最短距离 = max {i-k->j, i-->j}
 * 时间复杂度为O(n^2)
 * @param graph {Array(n*n)},表示用邻接矩阵来表示一个图
 */

function floyde(graph) {
  // dist为存储任意两点的最短路径的二维数组
  // path为i、j最短路径上，i的后驱节点
  var dist = [],
    path = [];

  var len = graph[0].length;
  for(var i=0; i<len; i++) {
    dist[i] = [];
    path[i] = [];
    // 初始化
    for(var j=0; j<len; j++) {
      dist[i][j] = graph[i][j];
      path[i][j] = j;
    }

    // 使用多态规划求出最短距离
    for(var i=0; i<len; i++) {
      for(var j=0; j<len; j++) {
        for(var k=0; k<len; k++) {
          if (dist[i][j] > dist[i][k] + dist[k][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
            path[i][j] = k;
          }
        }
      }
    }
    // 求start、end之间最短路径需要经过的结点
    var index = start;
    var resultPath = [index];
    while(index !== end) {
      index = dist[index][end];
      resultPath.push(index);
    }
  }
}

// https://zh.wikipedia.org/wiki/Floyd-Warshall%E7%AE%97%E6%B3%95
// http://www.cnblogs.com/biyeymyhjob/archive/2012/07/31/2615833.html
// http://blog.csdn.net/jnu_simba/article/details/8872626
// http://chenchuangfeng.iteye.com/blog/1816976

