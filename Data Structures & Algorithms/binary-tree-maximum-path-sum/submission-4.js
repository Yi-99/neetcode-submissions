/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {        
        let max = -Infinity;

        const getMax = (root) => {
            if (!root) return 0;
            let left = getMax(root.left);
            let right = getMax(root.right);
            let path = root.val + Math.max(left, right);
            return Math.max(0, path);
        }

        const dfs = (root) => {
            if (!root) return;
            let left = getMax(root.left);
            let right = getMax(root.right);
            max = Math.max(max, root.val + left + right);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return max;
    }
}
