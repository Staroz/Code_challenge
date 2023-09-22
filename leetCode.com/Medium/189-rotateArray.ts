//DATE: 09-20-23

/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): any {
 let array = [...nums, ...nums];
 let j = nums.length - k%nums.length;
 for (let i = 0; i < nums.length; i++) {
    nums[i] = array[j];
    j++
 }
 return nums
};


/*
lINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150


*/