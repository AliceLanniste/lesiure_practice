/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    
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
             if(i != index && candidates[i] == candidates[i-1]) continue;
            tempDataStruct.push(candidates[i])
            backtracking(i+1, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
    return result;
    
};