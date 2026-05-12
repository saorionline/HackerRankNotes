"use strict";
function lowestTriangle(b, a) {
    // 1. Calculate the raw height needed using the formula (2 * Area) / Base
    const rawHeight = (2 * a) / b;
    // 2. Return the ceiling (smallest integer greater than or equal to the result)
    return Math.ceil(rawHeight);
}
// Example usage:
console.log(lowestTriangle(17, 100)); // Output: 12
console.log(lowestTriangle(2, 2)); // Output: 2
