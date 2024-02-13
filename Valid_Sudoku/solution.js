/**
 * @param {character[][]} board
 * @return {boolean}
 * solution:这个数独不需要考虑是否有解法，只要考虑row、column和box中数字没有重复。
 * 新建3个 set数组用来检测重复数据，其中boxes是把数独分成9个小板块，boxes[i]其中i=Math.floor(i/3)*3 + Math.floor(j/3)
 */
var isValidSudoku = function(board) {
    const rows= []
    const cols= []
    const boxes = []
    for (let i=0;i<9;i++) {
        rows[i] = new Set()
        cols[i] = new Set()
        boxes[i] = new Set()
    }
 for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            const val = board[i][j]
            if(val !== '.') {
                if(rows[i].has(val) || cols[j].has(val) 
                ||  boxes[Math.floor(i/3)*3 + Math.floor(j/3)].has(val)) {
                    return false
                } else {
                    rows[i].add(val)
                    cols[j].add(val)
                     boxes[Math.floor(i/3)*3 + Math.floor(j/3)].add(val)
                }
            }
        }
    }

    return true
};