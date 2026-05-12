"use strict";
/**
 * Rotates an array to the left by d steps.
 * @param d - Number of left rotations
 * @param arr - The array to rotate
 * @returns The rotated array
 */
function rotateLeft(d, arr) {
    const n = arr.length;
    // Normalize d in case d > n
    const rotations = d % n;
    // Part 1: Elements from index 'd' to the end
    const rightPart = arr.slice(rotations);
    // Part 2: Elements from the start up to index 'd'
    const leftPart = arr.slice(0, rotations);
    // Concatenate them: [Back] + [Front]
    return [...rightPart, ...leftPart];
}
// Example Usage:
const n = 5;
const d = 4;
const a = [1, 2, 3, 4, 5];
const result = rotateLeft(d, a);
console.log(result.join(' ')); // Output: 5 1 2 3 4
