## 动态规划算法

### 概述


动态规划(简称dp)是一个多阶段决策问题，分析的时候，从初始状态开始，经过中间阶段的决策，达到结束状态。

动态规划的关键在于解决计算的冗余，通过空间来换取时间。

### 求解过程

- 判断是否为dp问题：存在明显的阶段性，子问题不是独立的，两个相邻的子问题之间存在关联，这样就可以确定要使用dp
- 维度：查看题中的约束条件，一个条件就是一维dp，两个条件就是二维dp
- 状态：根据约束条件，确定问题的状态变量
- 状态转移方程：前后两个状态的状态方程

```
// 状态转移方程
f(n, m) = max {f{n-1, m}, f{n-1, m-v[n] + p[n]}}
```
- 边界条件：最简单的情况下问题的解，也就是确定dp的结束条件

### 注意点

- 0：不使用任何元素，跟arr[0]是不一样的，arr[0]表示使用第一个元素，因此这点需要注意。

### 面向问题的经典案例

- 整数背包问题
- 菲波那切数列
- 硬币组合问题
- 最长公共子序列(lcs)

### 参考

[https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)

[http://www.cnblogs.com/steven_oyj/archive/2010/05/22/1741374.html](http://www.cnblogs.com/steven_oyj/archive/2010/05/22/1741374.html)

[http://songlee24.github.io/2014/11/27/dynamic-programming/](http://songlee24.github.io/2014/11/27/dynamic-programming/)

[http://www.hawstein.com/posts/dp-novice-to-advanced.html](http://www.hawstein.com/posts/dp-novice-to-advanced.html)

[http://www.hawstein.com/posts/dp-knapsack.html](http://www.hawstein.com/posts/dp-knapsack.html)