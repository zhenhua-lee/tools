function buildTree(arr, index) {
  if (!arr || !arr.length || arr.length < index) return;
  var tree = {};
  tree.data = arr[index];
  if (2*index + 1 < arr.length) {
    tree.left = buildTree(arr, 2*index + 1);
  } else {
    tree.left = null;
  }
  if (2*index + 2 < arr.length) {
    tree.right = buildTree(arr, 2*index + 2);
  } else {
    tree.right = null;
  }
  return tree;
}

function inverseTree(arr) {
  return buildTree(arr, 0);
}

module.exports = inverseTree;