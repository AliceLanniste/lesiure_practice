/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * solution：使用一个数组colores，利用colores[index] =count,来保存index出现的次数
 * 然后while colores，修改nums[i]的数值
 */
var sortColors = function(nums) {
    const colores = new Array(3).fill(0)
    for(const num of nums) {
        colores[num]++
    }
    let i=0
    for(let j=0;j<3;j++) {
        while(colores[j] > 0) {
            nums[i] = j
            colores[j]--
            i++
        }
    }
};