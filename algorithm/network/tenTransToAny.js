/*
 * 将十进制换换成任意进制
 */
function tenTransToAny(num, digit) {
  var digitNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  if (digit < 2 || digit > 20) throw new Error('digis should between 2 and 20');
  if (isNaN(+num)) throw new Error('first arguemt should be number');
  if (num === 0) return num;
  var re = [];
  while (num > 0) {
    var aa = Math.floor(num/digit);
    var bb = num % digit;
    re.unshift(digitNum[bb]);
    num = aa;
  }

  return re.join('')
}

module.exports = tenTransToAny;

