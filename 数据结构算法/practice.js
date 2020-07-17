/**
 * 1、无重复字符的最长子串
 */

 var lengthOfLongesSubstring = function (s) {
   let map = new Map(), len = s.length, max = 0, tempIndex = 0;
   for(let j = 0; j< len; j++) {
    if(map.has(s[j])) {
      tempIndex = Math.max(map.get(s[j]) + 1, tempIndex)
    }
    max = Math.max(max, j - tempIndex + 1)
    map.set(s[j], j)
   }
 }


 /**
  * 最长的公共前缀
  */
 var longestCommonPrefix = function(strs) {
   if(!strs.length) return '';
   let prefix = '';
   let minLen = Math.min.apply(null, strs.map(x=>x.length))
   for(let i = 0; i<minLen; i++) {
     if([...new Set(strs.map(x=>x[i]))].length === 1) {
       prefix += s[0][i]
     } else {
       break;
     }
   }
 }



 /**
  * 3、字符串的排列
  */

  var checkInclusion = function(s1, s2) {
    let len1 = s1.length, len2 = s2.length;
    if(len1 > len2) return false;
    let s1s2 = len2 - len1;
    let s1Sort = s1.split('').sort().toString()

    for(let i = 0; i<= s1s2; i++) {
      let cutOut = s2.slice(i, i + len1);
      if(s1Sort === cutOut.split('').sort().toString()) return true;
    }
    return false;
  }


/**
 * 4、字符串相乘
 */

var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0';
  let len1 = num1.length, len2 = num2.length, result = '', arr = new Array(len1 + len2 -1).fill(0)
  for(let i = 0; i<len1; i++) {
    for(let j = 0; j< len2; j++) {
      arr[i+j] += (num1[i] - 0) * (num2[j] - 0)
    }
  }

  let arrLen = arr.length
  temp = 0
  while(arrLen--) {
    temp += arr[arrLen];
    result = (temp%10) + result
    temp = ~~(temp/10) // 进位
  }
  temp>0?(result = temp + result) : void 0;
  return result;
}

  /**
  * 5、翻转字符串里的单词
  */
  var reverseWords = function(s) {
  //  return s.trim().split(/\s/).reverse().join(' ');
  let result = ''
  s.replace(/\S*\S/g, (...args) => {
    result === '' ? result += args[0] : result = args[0] + ' ' + result;
  })
  return result;
  }

/**
* 6、简化路径
*/

var simplifyPath = function (path) {
  let stack = [''];
  let arr = path.split('/')
  for (let item of arr) {
    if(item === '' || item === '.') {
      continue;
    }
    else if (item === '..') {
      stack.pop();// 上一级
      if(!stack.length) {
        stack.push('')
      }
    } else {
      stack.push(item)
    }
  }
  return stack.length === 1? '/':stack.join('/')
}

/**
 * 7、复原IP地址
 */
var restoreIpAddresses = function(s) {
  let res = [];
  if(s.length <4 || s.length > 12) return res;
  let segment = []
  dfs(s, 0, segment)
  return res;

  function dfs(s, start, segment) {
    if(start === s.length) {
      if(segment.length === 4) {
        let temp = ''
        for(let i = 0; i<segment.length;i++) {
          temp += segment[i]
          if(i != segment.length - 1) {
            temp += '.'
          }
        }
        res.push(temp)
      }
    } else {
      if(segment.length > 4) return ;
      for(let j = start; j< s.length && j < start + 3; j++) {
        let str = s.substring(start, j+1)
        if(str.charAt(0) === '0' && str.length > 1) break;
        if((str-0) >=0 && (str-0) <=255) {
          segment.push(str)
          dfs(s, j+1, segment)
          segment.pop()
        }
      }
    }
  }
}


/**
 * 8、三数之和
 */

var threeSum = function(nums) {
  let result = [];
  let len = nums.length;
  if(nums === null || len<3)return result;
  nums.sort((a,b)=>a-b);

  for(let i = 0; i< len -2; i++) {
    let cur  = nums[i]
    if(cur > 0) break; 
    if(cur === nums[i-1] && i>0) continue;
    let left = i + 1, right = len - 1;

    while(left< right) {
      let leftValue = nums[left]
      let rightValue = nums[right]

      if(cur + leftValue + rightValue === 0) {
        result.push([cur, leftValue, rightValue]);
        while(left < right && nums[left] === leftValue) left++
        while(left<right && nums[right] === rightValue) right--
      } else if(cur + leftValue + rightValue<0) {
        left++
      } else {
        right--
      }
    }
  }
  return result;
}

/**
 * 9、岛屿的最大面积
 */

 var maxAreaOfIsland = function(grid) {
   let maxArea = 0;
   for(let i  = 0 ; i< grid.length, i++) {
     for(let j = 0 ; j < grid[0].length; j++) {
       if(grid[i][j] === 1) {
         maxArea = Math.max(dfs(i,j), maxArea)
       }
     }
   }

   function dfs(i,j) {
     if(i<0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] ==0) {
       return 0
     }
     grid[i][j] = 0;
     let count = 1;
     count += dfs(i + 1, j)
     count += dfs(i - 1, j)
     count += dfs(i, j + 1)
     count += dfs(i, j - 1)
     return count;
   }
   return maxArea;
 }

 /**
  * 10.搜索旋转排序数组
  */

  var search = function(nums, target) {

  }


  /**
   * 最大和的连续子数组
   */

   var maxSubArray = function(nums) {
     let max = nums[0], sum = 0;
     nums.forEach(x => {
       sum = Math.max(sum + x, x)
       max = Math.max(max, sum)
     })
     return max;
   }