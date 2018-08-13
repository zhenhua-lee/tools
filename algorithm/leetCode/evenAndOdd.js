/**
 * 328 Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null) return null;
  var p = head;
  var i=0;
  while(p&&p.next&&p.next.next) {
    p.next = p.next.next;
    p = p.next;
    i++;
  }
  if ( i % 2 === 0) {
    p.next = head.next;
  } else {
    p.next.next = head.next;
    p.next = null;
  }
  return head;
};

