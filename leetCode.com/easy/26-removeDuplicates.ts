//DATE: 09-20-23

export default function removeDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            const element = nums[j];
            if (nums[i]==element) {
                nums.splice(j,1);
                j--
            } 
        }
    }
    return nums.length;
};


/*
lINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150


*/