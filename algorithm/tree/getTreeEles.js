function getTreeElesFirst(obj) {
  if (!obj) return;
  console.log(obj.data);
  getTreeElesFirst(obj.left);
  getTreeElesFirst(obj.right);
}

function getTreeEleMiddle(obj) {
  if (!obj) return;
  getTreeEleMiddle(obj.left);
  console.log(obj.data);
  getTreeEleMiddle(obj.right);
}

function getTreeEleAfter(obj) {
  if (!obj) return;
  getTreeEleAfter(obj.left);
  getTreeEleAfter(obj.right);
  console.log(obj.data);
}

var buildTree = require('./buildTree');
var tree = buildTree([1, 2, 3, 4, 5, 6]);
getTreeElesFirst(tree);
console.log('-------------')
getTreeEleMiddle(tree)
console.log('-------------')
getTreeEleAfter(tree)
