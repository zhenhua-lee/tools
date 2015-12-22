/*
 * 用两个stack实现queque
 * http://www.cnblogs.com/wanghui9072229/archive/2011/11/22/2259391.html
 */

function stackBecomeQueue () {
  var arr1 = [], arr2 = [];
  return {
    Enqueque: function (n) {
      arr1.push(n)
    },
    Dequeue: function() {
      if (!arr1.length && !arr2.length) throw new Error('queuqe have no data, so can\'t Dequeue')
      if (!arr2.length) {
        while (arr1.length) {
          arr2.push(arr1.pop());
        }
      }
      return arr2.pop()
    }
  }
}

module.exports = stackBecomeQueue;

