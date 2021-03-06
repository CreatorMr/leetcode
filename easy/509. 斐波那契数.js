/**
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 *  F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

    示例 1：

    输入：2
    输出：1
    解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
    示例 2：

    输入：3
    输出：2
    解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
    示例 3：

    输入：4
    输出：3
    解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
     

    提示：

    0 ≤ N ≤ 30
 */

 /**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if(N === 0) return 0;
  if(N === 1) return 1;
  return fib(N-1) + fib(N-2)
};

var fib = function(N) {
  if(N === 0) return 0;
  if(N === 1 || N === 2) return 1;
  let arr = [0, 1, 1];
  let i = N + 1 - 3;
  while( i > 0) {
      let sum = arr[arr.length-1] + arr[arr.length-2]
      arr.push(sum)
      i--
  }
  return arr[arr.length -1]
}

var fib = function (N) {
  function f(N,cur=0,next=1){
      if(N<=1)return N;
      if(N==2)return next ;
      return f(N-1, next, cur+next);
  }
  return f(N)
}
