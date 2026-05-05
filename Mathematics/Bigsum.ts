// --- Narrative Runner: A Very Big Sum ---
function runBigSumSimulation() {
    console.log("========================================");
    console.log("   HACKERRANK: A VERY BIG SUM SIMULATOR ");
    console.log("========================================");

    // Definimos casos de prueba con números que exceden los 32-bits
    const testCases = [
        [1000000001, 1000000002, 1000000003, 1000000004, 1000000005],
        [5000000000, 5000000000],
        [10000000000, 20000000000, 30000000000]
    ];

    testCases.forEach((arr, index) => {
        console.log(`\nTEST CASE #${index + 1}`);
        console.log(`Input Array: [${arr.join(', ')}]`);
        
        // Ejecución de la lógica
        const result = aVeryBigSum(arr);
        
        console.log(`\n>> Summing ${arr.length} large integers...`);
        console.log(`>> Result: ${result}`);
        console.log("----------------------------------------");
    });

    console.log("\n[Conclusion]: JavaScript numbers (64-bit floats) handle these sums up to 2^53 - 1.");
    console.log("[Technical Note]: For even larger values, BigInt would be the architect's choice.");
}

function aVeryBigSum(ar: number[]): number | bigint {
    // Usamos reduce para acumular la suma.
    // Nota: JavaScript maneja hasta 2^53 - 1 con el tipo 'number'.
    // Si los números fueran aún más grandes, usaríamos BigInt.
    
    return ar.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

runBigSumSimulation();