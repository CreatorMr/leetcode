/**
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 
 * 示例 1：

  输入: "the sky is blue"
  输出: "blue is sky the"
  示例 2：

  输入: "  hello world!  "
  输出: "world! hello"
  解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
  示例 3：

  输入: "a good   example"
  输出: "example good a"
  解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

  说明：
  无空格字符构成一个单词。
  输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
  如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

 * 
 */
/**
 * 、头尾去空格、分隔、翻转、链接
 */
 /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};

/**
 * 双端指针
 * 1、去头尾的空格
 * 2、逐个取字符串中的单词， 
 */

var reverseWords = function(s) {
    let left = 0, right = s.length - 1, result = [], tempWord = '';
    while(s.charAt(left) === '') left++
    while(s.charAt(right) === '') left--
    while (left< right) {
      let char = s.charAt(left)
      if(char === '' && tempWord) {
        result.unshift(tempWord)
        tempWord = ''

      } else if(char !== '') {
        tempWord += char
      }
      left++
    }
    result.unshift(tempWord)
    return result.join('')
};

// 正则使用
var reverseWords = function (s) {
  let result = ''
  s.replace(/\S*\S/g, (...args) => {
    result === '' ? result += args[0] : result = args[0] + ' ' + result
  })
  return result
}
reverseWords('  hello world!  ')