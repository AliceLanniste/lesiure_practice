/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
/**
 *检查一颗树是不是合规的二叉树。合规的二叉树，left分支节点的值全部小于root节点的值，right分支节点的值大于root节点的值。  
 * solution：使用recurison，比较（root.left.val,root.val）和(root.right.val ,root.val)
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root,null,null)
};

const helper = function(root,min,max) {
    if(root === null) return true
    if(min !== null && root.val <=min.val) return false;
    if(max !== null && root.val >=max.val) return false;
    return helper(root.left,min,root) && helper(root.right,root,max)
}