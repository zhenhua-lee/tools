function inverseTree(tree) {
  if (!tree) return null;
  var left = inverseTree(tree.left);
  var right = inverseTree(tree.right);
  tree.left = right;
  tree.right = left;
  return tree;
}

var buildTree = require('./buildTree');
var tree = buildTree([1, 2, 3, 4, 5, 6]);
console.log(inverseTree(tree))