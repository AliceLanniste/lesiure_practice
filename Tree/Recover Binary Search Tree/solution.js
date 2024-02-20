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