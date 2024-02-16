/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 solution:要得出所有为k的排列数组，就是使用dfs来穷举。
 当com.length == k,就return，其他时候就是loop+com.push(num),com.pop()
 把最后一个数pop掉，loop走完后，dfs就完成
 */
 var combine = function(n, k) {
    const res = []
    const comb = []
    const backtrace = (start) =>{
        if(comb.length === k)
        {
            res.push([...comb])
            return
        }

        for(let num=start;num<=n;num++) {
            comb.push(num)
            backtrace(num+1)
            comb.pop()
          
        }
    }
    backtrace(1)
    return res
};