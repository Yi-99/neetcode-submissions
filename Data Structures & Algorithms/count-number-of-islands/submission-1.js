class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const w = grid[0].length;
        const h = grid.length;
        let res = 0;

        const dfs = (i, j) => {
            if (i < 0 || i >= h || j < 0 || j >= w) return;
            if (grid[i][j] != '1') return;

            grid[i][j] = 0;

            dfs(i+1, j)
            dfs(i-1, j)
            dfs(i, j+1)
            dfs(i, j-1)
        }

        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (grid[i][j] != '0') {
                    res++;
                }
                dfs(i, j)
            }
        }

        return res;
    }
}
