class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s = sorted(s)
        sorted_t = sorted(t)

        i = 0

        if len(sorted_s) != len(sorted_t):
            return False

        while i < len(sorted_s):
            if sorted_s[i] != sorted_t[i]:
                return False
            i += 1

        return True