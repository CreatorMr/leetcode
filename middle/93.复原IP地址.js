/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
  有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。

  示例:

  输入: "25525511135"
  输出: ["255.255.11.135", "255.255.111.35"]

 */

/**
 * 回溯法
* @param {string} s
* @return {string[]}
*/
var restoreIpAddresses = function (s) {
  // IP地址，0-255 之前
  // 需要放置三个点，四个片段
  let res = [];
  if (s.length < 4 || s.length > 12) return res;
  let segment = []
  dfs(s, 0, segment)
  return res;
  /**
   * 
   * @param {*} s 字符串
   * @param {*} start 索引位置
   * @param {*} segment 存储片段  分为 四 段
   */
  function dfs(s, start, segment) {
    if (start == s.length) { // 处理完成了
      if (segment.length === 4) {
        let temp = ''
        for (let i = 0; i < segment.length; i++) {
          temp += segment[i]
          if (i != segment.length - 1) {
            temp += '.'
          }
        }
        res.push(temp)
      }
    } else {
      if (segment.length > 4) return;
      for (let j = start; j < s.length && j < start + 3; j++) {// 最多三位
        let str = s.substring(start, j + 1)
        if (str.charAt(0) == '0' && str.length > 1) break; // 0 开头的只能是0 不能是  0123 等
        if ((str - 0) >= 0 && (str - 0) <= 255) {
          segment.push(str)
          dfs(s, j + 1, segment) // return 不满足之后  当前循环j+1 补加一位。。。
          segment.pop()
        } else {
          break;
        }
      }
    }
  }
};