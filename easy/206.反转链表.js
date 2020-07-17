/**
 * 反转一个单链表。
 * 
 *  输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
 */

 /**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 迭代  时间 O(n) 空间O(1)
 */
var reverseList = function(head) {
  // 使用两个指针
  let [prev, curr] = [null, head];
  while (curr) {
    // let temp = curr.next;
    // curr.next = prev;
    // prev = curr
    // curr = temp
    [curr.next, prev, curr]  = [prev, curr, curr.next]      
  }
  return prev;
};