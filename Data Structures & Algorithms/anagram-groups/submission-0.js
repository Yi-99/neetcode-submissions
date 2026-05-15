class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length == 0) return [strs]
        else if (strs.length == 1) return [strs]

        const map = {}
        const res = []

        for (let str of strs) {
            let anag = str.toLowerCase().split('').sort().join('')
            if (!map[anag]) {
                map[anag] = [str]
            } else {
                map[anag].push(str)
            }
        }

        const keys = Object.keys(map)
        for (const key of keys) {
            res.push(map[key])
        }

        return res;
    }
}
