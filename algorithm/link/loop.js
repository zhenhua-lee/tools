/*
 * 证明单链表是否带有环
 * 伪代码
 */

// 方法1，通过hash的办法
bool isLoop(node* head) {
  if (!head) {
    return false;
  }
  node* p = head;
  map<node* , int> m;
  while(p) {
    if(!m[p]) {
      m[p] = true;
    } else {
      return true
    }
  }
  return false;
}

// 方法2，如果存在一个环，那么就可以用追击问题来解决，总会相遇
// 且指出环口的位置
bool isLoop(node* head) {
  node* fast = head, slow = head;
  while(fast && fast->next) {
    fast = fast->next->next;
    slow = slow->next;
    if (fast === slow) break;
  }
  return !(fast==NULL || fast->next == NULL);

  // 找环扣的位置
  fast = head;
  while(fast != slow) {
    fast = fast->next;
    slow = slow->next;
  }
  return fast;
}

// http://keep.iteye.com/blog/293454
// http://www.gocalf.com/blog/circle-of-link-list.html
// http://www.jobcoding.com/datastructure-and-algorithm/link/is-linklist-circle/
// http://www.cnblogs.com/ccdev/archive/2012/09/06/2673618.html
// http://www.cppblog.com/humanchao/archive/2008/04/17/47357.html
// http://blog.csdn.net/hackbuteer1/article/details/7583102
