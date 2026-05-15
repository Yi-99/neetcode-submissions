class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map();
        for (let i = 0; i < nums.length; ++i) {
            if (m.has(nums[i])) {
                return [m.get(nums[i]), i];
            }
            m.set(target-nums[i], i);
        } 

        return [];
    }
}
