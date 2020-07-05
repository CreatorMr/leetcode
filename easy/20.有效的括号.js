/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。

  示例 1:

  输入: "()"
  输出: true
  示例 2:

  输入: "()[]{}"
  输出: true
  示例 3:

  输入: "(]"
  输出: false
  示例 4:

  输入: "([)]"
  输出: false
  示例 5:

  输入: "{[]}"
  输出: true
 */

 /**
  * 使用栈的方式解决
  */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!s.length) return true
  let map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  let stack = []
  // 如果是{ ( [ 进行入栈操作
  while(s.length) {
    let end = s[0]
    s = s.slice(1)
    if(end === '(' || end === '{' || end === '[') {
      stack.push(end)
    } else {
      let pop = stack.pop()
      if(map[pop] !== end ) {
        return false
      }
    }
  }
  return !stack.length
};


var isValid = function(s) {
  if(!s.length) return true
  let map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  let stack = []
  // 找到{ ( [  等对应的闭合 括号字符  进行入栈操作
  for(let i = 0 ; i< s.length; i++) {
    if(map[s[i]]) {
      stack.push(s[i])
    } else if(s[i] !== map[stack.pop()]) {
      return false
    }
  }
  return !stack.length
};




