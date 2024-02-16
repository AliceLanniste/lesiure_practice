/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 从candidates数组中数字之后等于target，其中数字可重复。
 * solution:
 * 使用dfs+recursion，target-candidates[i],得到result。
 */

var combinationSum = function(candidates, target) {
    let index = 0
  let tempDataStruct = []
  let result = []

  function backtracking(index, target, tempDataStruct) {
      if(target === 0) {
          result.push([...tempDataStruct])
          return
      }
  
      if(target < 0) return;
  
      for(let i=index; i<candidates.length; i++) {
          tempDataStruct.push(candidates[i])
          backtracking(i, target-candidates[i], tempDataStruct)
          tempDataStruct.pop()
      }
  }
  backtracking(index, target, tempDataStruct)
  return result;
};

