
/**
 * Permutation II
 * @param {number[]} nums
 * @return {number[][]}
 *soluton:所有排列组合的问题都能用广度优先来解决。用循环列出index=0的数字：1，2，3
 在这基础上循环index=1的数字
 */
 var permute = function(nums) {
    let res= []
    let dfs=(arr,temp)=>{
            if(arr.length == 0){
             res.push(temp)
             return;
         }
 
         for(let i=0;i<arr.length;i++) {
               dfs(arr.filter((num,idx)=>idx !=i),[...temp,arr[i]])
         }
    }
    dfs(nums,[])
    return res
 };
 




/**
 * Permutation II
 * @param {number[]} nums
 * @return {number[][]}
 solution:广度优先算法，但是因为给的数组有重复数字，要得到不重复的数组。
 首先nums.sort排序，可以将重复数字归类。在循环的时候需要做一个重复数字判断，arr[i] === arr[i+1]
 遇到这种条件就要跳出

 */
 var permuteUnique = function(nums) {
    nums.sort((a,b) => a-b)
    let res= []

    let dfs = (arr,temp) =>{
        if(arr.length ==1) {
            res.push([...temp,arr[0]])
            return
        }

        for(let i=0;i<=arr.length;i++) {
            if(arr[i] === arr[i+1]) continue
            dfs(arr.filter((num,indx) =>indx != i),[...temp,arr[i]])
        }
    }

    dfs(nums,[])

    return res
};