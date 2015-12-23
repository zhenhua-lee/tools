/*
 * 打印出菱形
*/

function printRh(n) {
  var mid = Math.floor((n-1)/2);
  for(var i=0; i<n; i++) {
    var line = '';
    if (i < mid) {
      for(var j=0; j < n; j++) {
        if (j < mid - i || j > mid + i) {
          line += ' ';
        } else {
          line += '*'
        }
      }
    } else {
      for(var j=0; j < n; j++) {
        if (j < i - mid || j > n + mid - i -1) {
          line += ' ';
        } else {
          line += '*'
        }
      }
    }
    console.log(line + '\n')
  }
}

printRh(5)

