/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有满足条件且不重复的三元组
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 *  给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
 */

 /**
  * 双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  let len = nums.length;
  if(nums === null || len < 3) return result;
  // 排序
  nums.sort((a, b) => a-b)
  // 三个数之和，小于 len-2 
  for(var i = 0; i< len - 2; i++) {
      let cur = nums[i];
      //已经排序的第一项大于0 就不用找了
      if(cur > 0) break;
      // 去掉cur 与 i -1 项相同的 重复  i 与 i+1（left） 已经计算过了
      if(cur === nums[i-1] && i > 0) continue;
      let left = i + 1,right = len -1;
      
      while(left < right) {
          let leftVal = nums[left];
          let rightVal = nums[right];
          if(cur + leftVal + rightVal === 0) {
              result.push([cur, leftVal, rightVal]);
              // 已经计算过 cur 和 left 为前两个数，去掉后面与第二个相同的， 与最后一个相同的
              while(left < right && nums[left] === leftVal) left++;
              while(left<right && nums[right] === rightVal) right--;
          } else if(cur + leftVal + rightVal < 0) {
              left++
          } else {
              right--
          }
      }
  }
  return result;
};
nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))


