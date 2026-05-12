/**
 * Calculates the minimum number of supply drops needed.
 * @param n - Number of rows
 * @param m - Number of columns
 * @returns Minimum packages required
 */
function gameWithCells(n: number, m: number): number {
    // We calculate how many 2-unit spans are needed for rows and columns.
    // Math.ceil(n / 2) handles the "leftover" row/column if the number is odd.
    
    const rowsNeeded = Math.ceil(n / 2);
    const colsNeeded = Math.ceil(m / 2);
    
    return rowsNeeded * colsNeeded;
}

// Example Usage:
console.log(gameWithCells(2, 2)); // Output: 1
console.log(gameWithCells(3, 3)); // Output: 4