/**
 * 
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 示例 1:

  输入: num1 = "2", num2 = "3"
  输出: "6"
  示例 2:

  输入: num1 = "123", num2 = "456"
  输出: "56088"
  说明：

  num1 和 num2 的长度小于110。
  num1 和 num2 只包含数字 0-9。
  num1 和 num2 均不以零开头，除非是数字 0 本身。
  不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

 */

/**
 * 分析 不能转数字
 * num1 中的每一位 与num2 相乘  结果字符串  返回一个数组
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0';
  let len1 = num1.length, len2 = num2.length, result = '', arr = new Array(len1 + len2 -1).fill(0)
  for(var i =0; i<len1; i++) {
    for(var j = 0; j<len2; j++) {
      arr[i + j] += (num1[i]-0) * (num2[j] - 0)
    }
  }
  let arrLen = arr.length,
  temp = 0;
  while(arrLen--) {
    temp += arr[arrLen];
    result = (temp%10) + result
    temp = ~~(temp/10)
  }
  temp>0?(result = temp + result) :  void 0
  return result;
};


