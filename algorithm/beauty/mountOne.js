/*
 * 计算二进制数中1的个数
 * method1: 常规的除2求余
 * method2: 通过位运算，向右移动，查看最后一位是否为1
 * method3: 只检查1的位数，通过减1再求&，逐步消除1的个数
 * method4: 当只有8位时，可以通过罗列的方式，用空间来换取时间
 */

function divide(num) {
  var mount = 0;
  while (num) {
    if (num %2 === 1) {
      mount++;
    }
    num = Math.floor(num / 2);
  }
  return mount;
}

function rightMove(num) {
  var mount = 0;
  while (num) {
    mount += num & 0x01;
    num >>= 1;
  }
  return mount;
}

function justDealNumOne(num) {
  var mount = 0;
  while (num) {
    num &= (num - 1);
    mount++;
  }
  return mount;
}

// 伪算法，没罗列完整
// 通过枚举的方法，用空间来换取时间
function spaceSaveTime(num) {
  /*var arr = [
    0, 1, 1, 2, ...
  ];*/
  return arr[num];
}

module.exports = {
  divide: divide,
  rightMove: rightMove,
  justDealNumOne: justDealNumOne,
}
