class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> m;
        vector<vector<string>> res;
        // unordered_map<string, vector<string>>::iterator it;

        // O(N)
        for (string str : strs) {
            // O(N Log N)
            string newStr = str;
            sort(newStr.begin(), newStr.end());
            cout << newStr << endl;

            if (m.find(newStr) == m.end()) m[newStr] = {str};
            else m[newStr].push_back(str);
        }

        // O(N)
        for (const auto& pair : m) {
            res.push_back(pair.second);
        }

        return res;
    }
};
