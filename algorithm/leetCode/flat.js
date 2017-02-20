/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.list = nestedList;
  this.position = 0;
  this.childIterator = null;
  this.finalList = [];
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return (this.list.length - 1 >= this.position) ? true : false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  while (this.hasNext()) {
    var item = this.list[this.position];
    if (Object.prototype.toString.call(item) === '[object Array]') {
      var childIterator = this.childIterator;
      if (!childIterator) {
        this.childIterator = childIterator = new NestedIterator(item);
      }
      if (childIterator.hasNext()) {
        var val = childIterator.next();
        if (!childIterator.hasNext()) {
          this.position++;
          this.childIterator = null;
        }
        return val;
      }
    } else {
      this.position++;
      return item;
    }
  }
  return this.finalList;
};

module.exports = {
  NestedIterator: NestedIterator,
  getAllFlat: function(arr) {
    var i = new NestedIterator(arr);
    var aa = []
    while (i.hasNext()) {
      aa.push(i.next());
    }
    return aa;
  }
}
