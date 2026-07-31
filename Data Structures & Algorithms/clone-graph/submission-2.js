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

        const q = [node];
        const oldToNew = new Map();
        oldToNew.set(node, new Node(node.val));
        while (q.length > 0) {
            const curr = q.shift();
            const copy = oldToNew.get(curr);

            for (const n of curr.neighbors) {
                if (!oldToNew.has(n)) {
                    oldToNew.set(n, new Node(n.val));
                    q.push(n);
                }

                copy.neighbors.push(oldToNew.get(n))
            }
        }

        return oldToNew.get(node);
    }
}
