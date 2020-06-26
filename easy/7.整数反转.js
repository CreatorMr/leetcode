/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 
  示例 1:

  输入: 123
  输出: 321
  示例 2:

  输入: -123
  输出: -321
  示例 3:

  输入: 120
  输出: 21

  假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var min = Math.pow(-2, 31), 
        max = Math.pow(2, 31) -1,
        sign = Math.sign(x);
    x = Math.abs(x);

    var result = x.toString().split('').reverse().join('');
    result = sign * parseInt(result);
    if(result > max) {return 0};
    if(result < min) {return 0};

    return result;
};

/**
 * 求余法
 */

var reverse = function(x) {
  var min = Math.pow(-2, 31), 
  max = Math.pow(2, 31) -1,
  sign = Math.sign(x);
  x = Math.abs(x),
  result = 0,
  remainder;
  while(x > 0) {
    remainder = x%10;
    x = (x-remainder)/10;
    result = result * 10 + remainder;
  }
  result *= sign;
  if(result > max) {return 0};
  if(result < min) {return 0};

  return result;
};