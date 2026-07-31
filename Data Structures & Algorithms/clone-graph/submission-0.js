/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const oldToNew = new Map();

        const dfs = (currNode) => {
            if (!currNode) return;

            if (oldToNew.has(currNode)) return oldToNew.get(currNode);

            const copy = new Node(currNode.val)
            oldToNew.set(currNode, copy)
            currNode.neighbors.forEach((n) => {
                copy.neighbors.push(dfs(n))
            })

            return copy
        }

        return dfs(node)
    }
}
