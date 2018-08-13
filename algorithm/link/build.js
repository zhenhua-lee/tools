/*
 * 用javascript进行单链表的构建
 */
function build() {
  var head = {};
  var p = head;
  for(var i=0; i<5; i++) {
    var obj = {
      data: i+1,
    };
    p.next = obj;
    p = obj;
  }
  p.next = null;
  return head;
}

module.exports = build;
