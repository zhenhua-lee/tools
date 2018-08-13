/*
 * 请数组范围内的和
 * https://leetcode.com/problems/range-sum-query-immutable/
 */

 /**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  if (Object.prototype.toString.call(nums) !== "[object Array]") {
    return;
  }
  if (! (this instanceof NumArray)) return new NumArray(arguments);
  this.nums = nums;
  var sumFromBegin = this.sumFromBegin = [];
  for (var i=0; i<nums.length; i++) {
    if (i === 0) {
      sumFromBegin[i] = nums[i];
    } else {
      sumFromBegin[i] = sumFromBegin[i-1] + nums[i];
    }
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i > j || i<0 || j<0) return;
  if (i === 0) return this.sumFromBegin[j];
  return this.sumFromBegin[j] - this.sumFromBegin[i-1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
var aa = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(aa.sumRange(0, 2))
console.log(aa.sumRange(2, 5))
console.log(aa.sumRange(0, 5))

