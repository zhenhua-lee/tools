/*
 * 非递归遍历二叉树
 * http://blog.csdn.net/sgbfblog/article/details/7773103
 */

// 前序遍历
function firstFetch(root) {
  var arr = [];
  var result = [];
  while (root) {
    result.push(root.data);
    if (root.right) {
      arr.push(root.right);
    }

    if (root.left) {
      root = root.left;
    } else {
      if (arr.length) {
        root = arr.pop();
      } else {
        root = null;
      }
    }
  }
  return result;
}

// 中序遍历
function second(root) {
  var arr = [];
  var result = [];
  while (root) {
    if (root.right) {
      arr.push(root.right);
    }
    if (root.left) {
      arr.push(root);
      root = root.left;
    } else {
      result.push(root.data);
      if (arr.length) {
        result.push(arr.pop().data);
        root = arr.pop();
      } else {
        root = null;
      }
    }
  }
  return result;
}
// 中序遍历2
function second2(tree) {
  var arr = [];
  var result = [];
  while(tree || arr.length) {
    if (tree) {
      arr.push(tree);
      tree = tree.left;
    } else {
      var node = arr.pop();
      result.push(node.data);
      tree = node.right;
    }
  }
  return result;
}

// 后序遍历
function third(root) {
  var arr = [];
  var result = [];debugger;
  while(root) {
    result.push(root.data);
    if (root.left) {
      arr.push(root.left);
    }
    if (root.right) {
      root = root.right;
    } else {
      if (arr.length) {
        root = arr.pop();
      } else {
        root = null;
      }
    }
  }
  return result.reverse();
}
// 后序遍历访法2，用两个栈来实现
function third2(root) {
  if (!root) return;
  var arr1 = [], arr2 = [];
  arr1.push(root);
  while (arr1.length) {
    var node = arr1.pop();
    if (node.left) {
      arr1.push(node.left)
    }
    if (node.right) {
      arr1.push(node.right)
    }
    arr2.push(node.data)
  }
  return arr2.reverse();
}

// 层次遍历,通过一个队列来保存下一步要遍历的对象
function level(root) {
  if (!root) return;
  var result = [];
  var arr = [];
  arr.push(root);
  while(arr.length) {
    var node = arr.shift();
    result.push(node.data);

    if (node.left) {
      arr.push(node.left)
    }
    if (node.right) {
      arr.push(node.right);
    }
  }

  return result;
}

module.exports = {
  first: firstFetch,
  second: second,
  second2: second2,
  third: third,
  third2: third2,
  level: level,
};
