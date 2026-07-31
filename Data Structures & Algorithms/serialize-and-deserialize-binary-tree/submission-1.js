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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";

        const queue = new Queue();
        queue.push(root);
        const result = [];

        while (queue.size() > 0) {
            const node = queue.pop();
            if (!node) {
                result.push('N');
            } else {
                result.push(node.val.toString());

                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return result.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;

        const vals = data.split(',');
        const root = new TreeNode(parseInt(vals[0]))
        const queue = new Queue();
        queue.push(root);
        let i = 1;

        while (queue.size() > 0) {
            const node = queue.pop();

            if (vals[i] !== 'N') {
                node.left = new TreeNode(parseInt(vals[i]))
                queue.push(node.left);
            }
            i++;
            if (vals[i] !== 'N') {
                node.right = new TreeNode(parseInt(vals[i]))
                queue.push(node.right);
            }
            i++;
        }

        return root;
    }
}
