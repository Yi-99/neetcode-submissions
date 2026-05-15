class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = []

        m = {}

        for i, s in enumerate(strs):
            temp = []

            sorted_s_list = sorted(s)
            sorted_s = "".join(sorted_s_list)
            if sorted_s in m:
                result[m[sorted_s]].append(s)
            else:
                result.append([s])
                m[sorted_s] = len(result)-1

        return result
