/**
 * Prints a right-aligned staircase of size n.
 * @param n - The height and width of the staircase
 */
function staircase(n: number): void {
    for (let i = 1; i <= n; i++) {
        // .repeat(count) creates a string with 'count' copies of the original
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        
        // Combine and print the line
        console.log(spaces + hashes);
    }
}

// Example Usage for n = 6:
staircase(6);