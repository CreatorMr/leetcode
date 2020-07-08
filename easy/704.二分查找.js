/**
 * 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var low = 0
    var high = nums.length - 1;
    var mid;
    while(low <= high) {
        mid = parseInt((high+low)/2); 
        if(target === nums[mid]) return mid;
        else if(target > nums[mid]) {
        low = mid + 1;
        }
        else{
        high = mid - 1
        }
    }
    return -1;
};