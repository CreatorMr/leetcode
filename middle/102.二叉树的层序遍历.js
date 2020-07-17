/**
 * 
 * 
 * bfs  会用到队列的
 * 
 * 有权重 还是 没权重
 * 
 * 模板： 没权重
 * 1、建立队列  a 节点放入队列 ，看看左节点，看右节点 都加入队列
 * 2、逐层 
 */

// DFS
var levelOrder = function(root) {
  if(!root) return []
  let res = []
  var dfs = function(node, depth) {
      if(!node) return;
      res[depth] = res[depth] || []
      res[depth].push(node.val)
      dfs(node.left, depth + 1)
      dfs(node.right, depth + 1)
  }
  dfs(root, 0)
  return res;
};