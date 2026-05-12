"use strict";
function solveKnightsTour(n) {
    const board = Array.from({ length: n }, () => Array(n).fill(-1));
    // Possible moves for a knight (L-shape)
    const moveX = [2, 1, -1, -2, -2, -1, 1, 2];
    const moveY = [1, 2, 2, 1, -1, -2, -2, -1];
    // Starting position
    board[0][0] = 0;
    if (backtrack(0, 0, 1, board, moveX, moveY, n)) {
        console.table(board);
    }
    else {
        console.log("No solution exists for this grid size.");
    }
}
function backtrack(x, y, moveCount, board, mX, mY, n) {
    if (moveCount === n * n)
        return true;
    for (let i = 0; i < 8; i++) {
        const nextX = x + mX[i];
        const nextY = y + mY[i];
        if (isValid(nextX, nextY, board, n)) {
            board[nextX][nextY] = moveCount;
            if (backtrack(nextX, nextY, moveCount + 1, board, mX, mY, n))
                return true;
            // Backtrack: Reset if move doesn't lead to a solution
            board[nextX][nextY] = -1;
        }
    }
    return false;
}
function isValid(x, y, board, n) {
    return x >= 0 && x < n && y >= 0 && y < n && board[x][y] === -1;
}
// Try a 5x5 board (8x8 takes significantly longer without heuristics)
solveKnightsTour(5);
