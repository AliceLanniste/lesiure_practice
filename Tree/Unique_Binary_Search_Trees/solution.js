/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const memo = new Array(n+1).fill(-1)
    const solove =(n,memo) =>{
          if(n <=1) return 1;
        if(memo[n] !== -1) return memo[n];
        let results = 0;
      for(let i=1;i<=n;i++) {
          results += solove(i-1,memo)*solove(n-i,memo);
      }
      memo[n] = results;
      console.log(memo)
      return results;
    }

    return solove(n,memo)
    
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n == 0) return [];
    // 构造闭区间 [1, n] 组成的 BST
    return build(1, n);
  }
  
  var build = function(lo, hi) {
    // 存储 BST 的结果集
    var res = [];
    // base case
    if (lo > hi) {
      // 注意：这里必须添加 null，否则在下面无法递归左右子树
      res.push(null);
      return res;
    }
    // 1、穷举 root 节点的所有可能
    for (var i = lo; i <= hi; i++) {
      // 2、递归构造出左右子树的所有合法 BST
      var leftTree = build(lo, i - 1);
      var rightTree = build(i + 1, hi);
      // 3、给 root 节点穷举所有左右子树的组合
      for (var j = 0; j < leftTree.length; j++) {
        for (var k = 0; k < rightTree.length; k++) {
          // i 作为根节点 root 的值
          var root = new TreeNode(i);
          root.left = leftTree[j];
          root.right = rightTree[k];
          res.push(root);
        }
      }
    }
    return res;
  };