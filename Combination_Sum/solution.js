/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * solution:从candidates数组中数字之后等于target，其中数字可重复。
 * 使用dfs+recursion，target-candidates[i],得到result。
 */
var combinationSum = function(candidates, target) {
    let result = []
    dfs(candidates,target,[],result)
    return result
};

function dfs(nums,target,path,result) {
    if(target < 0) {
        return
    }
    if(target === 0) {
        result.push(path)
        return
    }

    for(let i=0;i<nums.length;i++) {
        dfs(nums.slice(i),target-nums[i],[...path,nums[i]],result)
    }
}