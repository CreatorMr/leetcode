/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍
 * [1] 两数之和
 * 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 存储已经遍历的值  key-value  值 - index
    const temp = {}
    for(var i =0; i< nums.length; i++ ) {
        const curVal = nums[i]
        // 使用对象 in 
        if( target - curVal in temp ) { // 对存在属性为 target - curVal 的值
            return [temp[target-curVal], i]
        }
        temp[curVal] = i
    }
}


