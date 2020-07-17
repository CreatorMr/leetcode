/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

  岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

  此外，你可以假设该网格的四条边均被水包围。

   

  示例 1:

  输入:
  [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
  ]
  输出: 1
  示例 2:

  输入:
  [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
  ]
  输出: 3
  解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

 */

 /**
  * dfs
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let result = 0;
  for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[0].length; col++) {
          if(grid[row][col] == 1) {
            result++
            dfs(row, col) 
          }
      }
  }
  function dfs(row, col) {
    if(row< 0 || row >= grid.length || col < 0 || col>=grid[0].length || grid[row][col] =='0') {
      return 0;
    }
    grid[row][col] = '0'; // 找到一个  改成 0
    dfs(row - 1, col)
    dfs(row + 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }

  return result;
};

/**
 * bfs 
 */