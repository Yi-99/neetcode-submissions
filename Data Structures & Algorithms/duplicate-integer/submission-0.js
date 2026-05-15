class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const s = new Set();
        for (const n of nums) {
            if (s.has(n)) {
                return true;
            }
            s.add(n);
        }

        return false;
    }
}
