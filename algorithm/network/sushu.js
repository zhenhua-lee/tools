function getSuShu() {
  var re = [1, 2];
  for(var i=3; i<=100; i++) {
    if (isSuShu(i)) {
      re.push(i);
    }
  }
  return re;
}

function isSuShu(n) {
  var l = Math.sqrt(n);
  var flag = true;
  for(i=2; i <= l; i++) {
    if(n % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(getSuShu())
