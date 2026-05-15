class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        sorted_list = sorted(nums)

        i = 0

        while i < len(nums)-1:
            if sorted_list[i] == sorted_list[i+1]:
                return True
            i += 1
        
        return False