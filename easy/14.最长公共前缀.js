/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
    输入: ["flower","flow","flight"]
    输出: "fl"

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。

    说明:所有输入只包含小写字母 a-z 。
 */

 
var longestCommonPrefix = function(strs) {
  if(!strs.length) return ''
  let preStr = ''
  // 先获取最小长度项
  let minLen = Math.min.apply(null, strs.map(x=>x.length))
  for(var i= 0;i<minLen;i++) {
    if([...new Set(strs.map(x=>x[i]))].length === 1) {
      preStr += strs[0][i]
    } else {
      break;
    }
  }
  return preStr;
};
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix(['aca', 'cba']))