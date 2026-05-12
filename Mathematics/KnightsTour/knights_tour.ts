type Board = number[][];

function solveKnightsTour(n: number): void {
    const board: Board = Array.from({ length: n }, () => Array(n).fill(-1));

    // Possible moves for a knight (L-shape)
    const moveX = [2, 1, -1, -2, -2, -1, 1, 2];
    const moveY = [1, 2, 2, 1, -1, -2, -2, -1];

    // Starting position
    board[0][0] = 0;

    if (backtrack(0, 0, 1, board, moveX, moveY, n)) {
        console.table(board);
    } else {
        console.log("No solution exists for this grid size.");
    }
}

function backtrack(x: number, y: number, moveCount: number, board: Board, mX: number[], mY: number[], n: number): boolean {
    if (moveCount === n * n) return true;

    for (let i = 0; i < 8; i++) {
        const nextX = x + mX[i];
        const nextY = y + mY[i];

        if (isValid(nextX, nextY, board, n)) {
            board[nextX][nextY] = moveCount;
            if (backtrack(nextX, nextY, moveCount + 1, board, mX, mY, n)) return true;
            
            // Backtrack: Reset if move doesn't lead to a solution
            board[nextX][nextY] = -1;
        }
    }
    return false;
}

function isValid(x: number, y: number, board: Board, n: number): boolean {
    return x >= 0 && x < n && y >= 0 && y < n && board[x][y] === -1;
}

// Try a 5x5 board (8x8 takes significantly longer without heuristics)
solveKnightsTour(5);