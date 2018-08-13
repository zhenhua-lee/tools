/*
 * 思路1：将特殊情况考虑完全，然后再处理一般情况
*/
function transform(num) {
  var arr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var str = '';
  var f4 = Math.floor(num / 1000) || 0;
  var f3 = Math.floor((num - f4*1000)/100) || 0;
  var f2 = Math.floor((num - f4*1000 - f3*100)/10) || 0;
  var f1 = num % 10;
  debugger;
  // 针对1[0-9]
  if (isZero(f4) && isZero(f3) && f2 == 1) {
    str += '十';
    if (isZero(f1)) {
      return str
    }
    return str + arr[f1];
  }
  // 针对[1-9]01[1-9]
  if (!isZero(f4) && isZero(f3) && f2 == 1) {
    str += arr[f4] + '千' + '零' + '十';
    if (isZero(f1)) return str;
    return str += arr[f1];
  }

  // 针对[1-9]00[1-9]
  if (!isZero(f4) && isZero(f3) && isZero(f2) && !isZero(f1)) {
    str += arr[f4] + '千' + '零' + arr[f1];
    return str;
  }

  // 针对[1-9]0[1-9]
  if (isZero(f4) && !isZero(f3) && isZero(f2) && !isZero(f1)) {
    str += arr[f3] + '百' + '零' + arr[f1];
    return str;
  }

  // 针对[1-9]000
  if (!isZero(f4) && isZero(f3) && isZero(f2) && isZero(f1)) {
    str += arr[f4] + '千';
    return str;
  }
  // 针对[1-9]00
  if (!isZero(f3) && isZero(f2) && isZero(f1)) {
    str += arr[f3] + '百';
    return str;
  }

  if (!isZero(f4)) {
    str += arr[f4] + '千';
  }
  if (!isZero(f3)) {
    str += arr[f3] + '百';
  }
  if (!isZero(f2)) {
    str += arr[f2] + '十';
  }
  if (!isZero(f1)) {
    str += arr[f1];
  }
  if (!num) return '零';
  return str;
}

function isZero(n) {
  return n === 0;
}

module.exports = transform;
