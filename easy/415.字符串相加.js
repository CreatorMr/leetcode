/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

 */

 /**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let len1 = num.length, len2 = num2.length, temp = 0, result = ''
  while(len1 || len2) {
    if(len1) {
      temp +=num1[--len1]-0
    }
    if(len2) {
      temp +=num2[--len2]-0
    }
    result = temp%10 + result
    temp = temp>9?1:0
  }
  if(temp) result = 1 + result
  return result
};