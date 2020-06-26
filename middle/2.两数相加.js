/**
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 *  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 分析： 
 *  1、逆序
 *  2、2 -> 4 -> 3   ==>  243  
 *  
 */
var addTwoNumbers = function(l1, l2) {
    // 初始化
    const head = new ListNode(null)
    // 初始化 为 head null  返回的结果
    let node = head 
    // 记录进位 0 or 1
    let carry = 0 
    // 只要l1, l2 还有就继续执行
    while(l1 || l2) {
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        // 结果
        let val = carry + n1 + n2;
        // 进位值 按位取反两次 去掉小数部分
        carry = ~~(val / 10)
        // 当前位 值
        val = val % 10 
        node.next = new ListNode(val) 
        if(l1) {
            l1 = l1.next
        }
        if(l2) {
            l2 = l2.next
        }
        node = node.next

    }

    if(carry) { 
        // 9 + 9 + 1 = 19 要么 直接 node.next = 1 要么 为 0 
        node.next = new ListNode(1)
    }
    return head.next
};