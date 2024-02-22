/**
 *summary： 1.[1,n]能组合多少个bst，2.以及打印这些bst
 */

/**
 * @param {number} n
 * @return {number}
 * 要计算最终有多少个bst组合，首先n=0||1的时候，为1。n=2的时候为2。
 * 如果根节点为3的话，组合的多少，要看left*right。left有3-1个节点，right则是3-3个节点组合。
 *因此reuslt(i-1,xxx)用来计算i<root,left分支多少种组合，result（n-i，xxx）剩下的节点,有多少种组合。
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
/**
 * 上面是计算有多少种组合，这次是把所有组合全打印出来。
 * 也就是要遍历所有组合，并且打印节点。
 * solution:让root遍历[1,n],按照left=[1,root-1],right=[root+1,n]
 * 
 */
var generateTrees = function(n) {
    if (n == 0) return [];
    
    return build(1, n);
  }
  
  var build = function(lo, hi) {
    
    var res = [];
    // base case
    if (lo > hi) {
      res.push(null);
      return res;
    }
    
    for (var i = lo; i <= hi; i++) {
      var leftTree = build(lo, i - 1);
      var rightTree = build(i + 1, hi);
     
      for (var j = 0; j < leftTree.length; j++) {
        for (var k = 0; k < rightTree.length; k++) {
         
          var root = new TreeNode(i);
          root.left = leftTree[j];
          root.right = rightTree[k];
          res.push(root);
        }
      }
    }
    return res;
  };