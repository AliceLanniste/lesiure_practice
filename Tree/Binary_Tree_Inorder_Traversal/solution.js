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
 * @return {number[]}
 *递归：遍历是left，mid，right的方向，使用递归方法，来遍历，root == null条件来控制
 *loop:loop的解法相比递归会有点复杂，需要有一个stack来装节点,
 while(currentNode || stack.length)
 * if(currentNode) 
      stack.push(currentNode) //塞入stack
      currentNode = currentNode.left    //拿到left节点
   else   // currentNode = null
     stack.pop() //取出 currentNode
     result.push(currentNode.val)  //塞入值
      currentNode = currentNode.left //拿到right节点
 */
 var inorderTraversal = function(root) {
    const result = []
    helper(root,result)
    return result
    
};
const helper=(root,result) =>{
   if(root !=null) {
       helper(root.left,result)
       result.push(root.val)
       helper(root.right,result)
   }
}

var inorderTraversalLoop = function(root) {
    const result = []
    const stack =[]
    let currentNode = root
    while(currentNode || stack.length) {
        if(currentNode) {
            stack.push(currentNode)
            currentNode = currentNode.left
        } else {
            stack.pop()
            result.push(currentNode.val)
            currentNode = currentNode.right
        }
    }
    return result
};