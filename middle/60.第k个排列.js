/**
 *  给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
    按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

    "123"
    "132"
    "213"
    "231"
    "312"
    "321"
    给定 n 和 k，返回第 k 个排列。

    说明：

    给定 n 的范围是 [1, 9]。
    给定 k 的范围是[1,  n!]。
    示例 1:

    输入: n = 3, k = 3
    输出: "213"
    示例 2:

    输入: n = 4, k = 9
    输出: "2314"
 */


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let arr = Array.from({length: n}, (i,index) => index + 1);
    return getPermutationArr(arr, k)
};

function getPermutationArr(arr, k) {
  if(k === 0) return arr.reverse().join('')
  if(k === 1) return arr.join('')
  /**
   * 以 n = 4 , k = 9 为例
   * [1,2,3,4]   1 开头 2，3，4 的 排序个数 为  3！= 6 < 9    count = 0
   *    由此 首位  进入 排列队列的 索引 index  0 开始  index = 0  head = arr[index] = 1  后面 2,3,4 组合  3！ = 6 < 9   count = 3！ = 6
   *    index++   head = arr[index] = 2   3！ + count = 12 > 9  ==>  首位 为 2
   * 
   * [2, ???]  此时 1 开头的已经 查看过 3！= 6 个了， 下面继续查看 从2 开头的  1，3，4 排列的 的 第 9 - 6 = 3 个排列  k = k - factorial(arr.length - 1)
   * 
   */
  let index = Math.ceil(k/factorial(arr.length-1)) - 1 // 考虑整除的情况
  // 去除head  后面 数组 
  let rest = arr.filter(x => x !== arr[index])
  return arr[index].toString() + getPermutationArr(rest, k%factorial(arr.length-1)) // k % factorial(arr.length-1) === 0 直接返回反转数组拼接的值
}
var factorialCache = new Map()
function factorial(x) {
  if(x <= 2)  return x;
  if (factorialCache.has(x)) return factorialCache.get(x)
  const result =  x * factorial(x-1)
  factorialCache.set(x, result)
  return result;
}
// console.log(getPermutation(3,3))
// console.log(getPermutation(4,9))
console.log(getPermutation(2,2))