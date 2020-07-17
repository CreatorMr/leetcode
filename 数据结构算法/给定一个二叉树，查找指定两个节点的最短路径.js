/**
 * 1、求最小公共祖先
 * 2、实现计算距离
 * 3、求和
 */


 var lowestCommonAncestor =  function(root, p, q) {
   if(root === null || root === p || root === q) {
      return root;
   }
   let left = lowestCommonAncestor(root.left, p,q)
   let right = lowestCommonAncestor(root.right, p,q)
   if(left && right) {
     return root;
   }
   return left || right;
 }
 const getPath = function(root, p, paths) {
   // 找到节点返回true
   if(root === p) return true

   paths.push(root)

   let flag = false // 表示是否找到

   if(root.left !== null) {
     flag = getPath(root.left, p, paths)
   }
   if(!flag && root.right !== null) {
    flag = getPath(root.right, p, paths)
   }

   if(!flag) {
     paths.pop() // 回溯
   }
   return flag;
 }

 const shortestDistance = function(root, p, q) {
    // 最近公共祖先
    let lowestCA = lowestCommonAncestor(root, p, q)
    // 分别求出公共祖先到两个节点的路经
    let pDis = [], qDis = []
    getPath(lowestCA, p, pDis)
    getPath(lowestCA, q, qDis)
    // 返回路径之和
    return (pDis.length + qDis.length)
}