class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        const w = grid[0].length
        const h = grid.length

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]

        const bfs = (i, j) => {
            const q = new Queue();
            q.push([i, j]);
            grid[i][j] = '0';

            while(!q.isEmpty()) {
                const [row, col] = q.pop();
                for (const [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;
                    if (nr >= 0 && nr < h && nc >= 0 && nc < w && grid[nr][nc] == '1') {
                        q.push([nr, nc]);
                        grid[nr][nc] = '0';
                    }
                }
            }
        }

        for (let r = 0; r < h; r++) {
            for (let c = 0; c < w; c++) {
                if (grid[r][c] == '1') {
                    bfs(r,c)
                    islands++;
                }
            }
        }

        return islands;
    }
}
