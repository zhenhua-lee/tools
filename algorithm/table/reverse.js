/*
 * 单链表的翻转
*/
function reverse(head) {
  var p = head.next,
    q = p.next;
  p.next = null;
  while(q) {
    var k = q.next;
    q.next = p;
    p = q;
    q = k;
  }
  head.next = p;
  return head;
}

module.exports = reverse;
