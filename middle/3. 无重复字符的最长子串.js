/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 *  输入: "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

 /**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let index = 0, max = 0
  for(let i = 0, j = 0; j < s.length; j++) {
      index = s.substring(i, j).indexOf(s[j]) 
      if(index !== -1) {  // 找到了相同的  第 index 个重复  从找的的下一位继续
          i = i + index + 1 
      } 
      max = Math.max(max, j - i + 1) 
  }
  return max
};


/**
 * 
 * 使用map 维护
 * key 为字符 ，value 为下标
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map(), max = 0, len = s.length, tempIndex = 0;
  for(var j = 0; j < len; j++) {
      if(map.has(s[j])) {
          // 遇到相同的在map 中找到相同项的索引 后移一位， 更新起始位的索引
          tempIndex = Math.max(map.get(s[j]) + 1, tempIndex)
      }
      max = Math.max(max, j - tempIndex + 1 )
      map.set(s[j], j)
  }
  return max;
};