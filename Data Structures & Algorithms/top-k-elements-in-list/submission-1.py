class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        sorted_nums = sorted(nums)

        result = []
        m = {}

        for i, n in enumerate(sorted_nums):
            if n not in m:
                m[n] = 1
            else:
                m[n] += 1

        sorted_items = sorted(m.items(), key=lambda item: item[1], reverse=True)

        for i in range(k):
            num, freq = sorted_items[i]
            result.append(num)

        return result