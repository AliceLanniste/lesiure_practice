/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
   let ans = [];

   const dfs = (start, temp) => {
       ans.push(temp);
       for(let i = start; i < nums.length; i++){
        if (i !== start && nums[i] === nums[i - 1]) continue;
        dfs(i + 1, [...temp, nums[i]]);
       }
   }
  dfs(0, []);
  return ans;
};