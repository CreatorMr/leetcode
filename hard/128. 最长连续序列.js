/**
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
  要求算法的时间复杂度为 O(n)。

  示例:

  输入: [100, 4, 200, 1, 3, 2]
  输出: 4
  解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。

 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(!nums || !nums.length) return 0;
  let max = 1, tempIndex = 0;
  nums = [...new Set(nums.sort((a,b)=>a-b))]
  for(let i = 0; i< nums.length; i++) {
    if(nums[i] == nums[i+1] -1) {
      max = Math.max(max, i + 1 - tempIndex + 1)
    } else {
      tempIndex = i + 1
    }
  }
  return max;
};
