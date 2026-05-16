class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = []
        m = {}

        for i, n in enumerate(nums):
            m[n] = i

        for i in range(len(nums)):
            j = 0
            sum = 1
            while j < len(nums):
                if j != i:
                    sum *= nums[j]
                j += 1
            result.append(sum)

        return result
