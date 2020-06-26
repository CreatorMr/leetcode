
/**
 * 
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。} s1 
    输入: s1 = "ab" s2 = "eidbaooo"
    输出: True
    解释: s2 包含 s1 的排列之一 ("ba").

    输入: s1= "ab" s2 = "eidboaoo"
    输出: False
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let len1 = s1.length, len2 = s2.length;
  if(len1 > len2) return false;
  let s1s2 = len2 - len1;
  let s1Sort = s1.split('').sort().toString();
  for(var i =0; i<=s1s2;i++) {
      let cutOut = s2.slice(i, i + len1)
      if(s1Sort === cutOut.split('').sort().toString()) return true
  }
  return false
};