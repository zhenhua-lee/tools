function trans() {
  var arr = [];
  return {
    push: function (n) {
      arr.push(n);
      var len = arr.length;
      while(len > 1) {
        arr.push(arr.shift());
        len--;
      }
    },
    pop: function () {
      return arr.shift();
    },
    clean: function () {
      arr = null;
    }
  }
}

module.exports = trans;
