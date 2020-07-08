
/**
 * 用栈实现队列
 *  push(x) -- 将一个元素放入队列的尾部。
    pop() -- 从队列首部移除元素。
    peek() -- 返回队列首部的元素。
    empty() -- 返回队列是否为空。

    用两个栈  倒来倒去 实现
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.inputStack = [], 
  this.outputStack = [];

};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
   this.inputStack.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
   // 输入的栈全都导入输出栈
   while(this.inputStack.length != 0) {
       this.outputStack.push(this.inputStack.pop())
   }
   let pop = this.outputStack.pop()
   while(this.outputStack.length != 0) {
       this.inputStack.push(this.outputStack.pop())
   }
   return pop;
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
   return this.inputStack[0]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
   return !this.inputStack.length
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

class MyQueue {
  constructor() {
    this.inputStack = []
    this.outputStack = []
  }
  push(x) {
    this.inputStack.push(x)
  }
  pop() {
    // 输入的栈全都导入输出栈
    while(this.inputStack.length != 0) {
        this.outputStack.push(this.inputStack.pop())
    }
    let pop = this.outputStack.pop()
    while(this.outputStack.length != 0) {
        this.inputStack.push(this.outputStack.pop())
    }
    return pop;
  }
  peek() {
    return this.inputStack[0]
  }
  empty() {
    return !this.inputStack.length
  }
}