/**
 * 二叉树有一个非常有意思的地方在于，如果按照left，root，right顺序来遍历
 * 能得到一个升序的数组。
 * Q：为了修改不正确顺序的bst。
 * S: 所以得遍历所有节点。
 */ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let small = null, big = null, prev = null;
   let inorder = function(r) {
       if (r == null) return;
       inorder(r.left);
       if (prev && prev.val > r.val) {
           console.log(prev.val)
           small = r;
           if(big) return;
           big = prev;
       }
       prev = r;
       inorder(r.right);
       return;
   }
   inorder(root);
   [small.val, big.val] = [big.val, small.val];
};