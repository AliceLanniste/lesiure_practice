/**
 * 都是从rotated Array找数字，是二分法的变种。
 * 变化的地方在于：比较左右分支的时候，不仅要比较left，mid和right，还要拿target和left，mid，right比较
 * 来确定position
 * 1.Initialize left to 0 (representing the left boundary of the search range) and right to the length of nums minus 1 (representing the right boundary of the search range).

2.Enter a while loop that continues as long as left is less than or equal to right.
3.Calculate the midpoint mid using integer division (//) of the sum of left and right.
4.Check if the element at the midpoint nums[mid] is equal to the target value. 
5. Check if the element at the midpoint nums[mid] is equal to the element at the left boundary nums[left]. If they are equal, 
it means we have duplicate values at the left and mid positions. Increment left by 1 to skip duplicates and continue to the next iteration using the continue statement.
 */ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * search in rotated sorted Array
 */
var search = function(nums, target) {
    let left = 0,right = nums.length-1
    while(left <= right) {
        const mid = Math.floor((left+right) / 2)
        if(nums[mid] == target) return mid
        else if(nums[mid] >= nums[left]) {
            if(nums[mid] >= target && nums[left]<= target) {
                right = mid-1
            } else {
                left = mid+1
            }
        } else {
            if(nums[mid] <= target && nums[right] >=target)
            {
                left = mid+1
            } else {
                right = mid-1
            }
        }
    }
    return -1
};




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * search in rotated sorted Array II 
 * solution和上面一致但是rotated Array可以由重复的数字，所以
 */
var search = function(nums, target) {
    let start =0
    let end =nums.length-1
    while(start<=end) {
        let mid = start + Math.floor((end - start) / 2);
        if(target === nums[mid]) {
            return true
        } else if(nums[start] < nums[mid]) {
            if(nums[start] <=target && nums[mid] > target) {
                end =mid-1
            } else {
                start = mid+1
            }
        } else if (nums[mid] < nums[start]) {
            if (nums[end] >= target && nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            start += 1;
        }
    }

    return false;
        
    
};