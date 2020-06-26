/**
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 
 *  nums1 = [1, 3]
    nums2 = [2]

    则中位数是 2.0


    nums1 = [1, 2]
    nums2 = [3, 4]

    则中位数是 (2 + 3)/2 = 2.5
 */
// 粗暴解法 双指针移动  第k小数
 /**
  * 粗暴解法
  * @param {*} nums1 
  * @param {*} nums2 
  */
var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length;
  // 先排序
  let arr = nums1.concat(nums2).sort((a, b) => a - b )
  if(len%2 === 1) {
    return arr[~~(len/2)]
  } else {
    return (arr[len/2 -1] + arr[len/2]) /2 
  }
};
/**
 * 双指针
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let reIndex = nums2.length - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
      while (nums1[i] <= nums2[reIndex] && reIndex > -1) {
          nums1.splice(i + 1, 0, ...(nums2.splice(reIndex, 1)));
          reIndex--;
      }
  }
  const arr = nums2.concat(nums1);
  const { length } = arr;
  return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
};

/**
 * 二分法
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 保证num1是比较短的数组
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const length1 = nums1.length;
    const length2 = nums2.length;
    let min = 0;
    let max = length1;
    let half = Math.floor((length1 + length2 + 1) / 2);
    while (max >= min) {
        const i = Math.floor((max + min) / 2);
        const j = half - i;
        if (i > min && nums1[i - 1] > nums2[j]) {
            max = i - 1;
        } else if (i < max && nums1[i] < nums2[j - 1]) {
            min = i + 1;
        } else {
            let left,right;
            if (i === 0) left = nums2[j - 1];
            else if (j === 0) left = nums1[i - 1];
            else left = Math.max(nums1[i - 1], nums2[j - 1]);
            
            if (i === length1) right = nums2[j];
            else if (j === length2) right = nums1[i];
            else right = Math.min(nums1[i], nums2[j]);
            
            return (length1 + length2) % 2 ? left : (left + right) / 2;
        }
    }
    return 0;
};