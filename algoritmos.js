"use strict";
function simpleArraySum(ar) {
    let total = 0; // El acumulador
    for (const num of ar) {
        total += num; // Sumamos cada número al total
    }
    return total;
}
// Prueba con el ejemplo del ejercicio
const input = [1, 2, 3, 4, 10, 11];
const result = simpleArraySum(input);
console.log("--- Algoritmos: Suma de Arreglo ---");
console.log(`Arreglo: [${input}]`);
console.log(`Resultado esperado: 31 | Resultado obtenido: ${result}`);
//Segunda solucion
function simpleArraySumReduce(ar) {
    // reduce recibe (acumulador, valorActual) => lógica, valorInicial
    return ar.reduce((accumulator, current) => accumulator + current, 0);
}
console.log("Resultado con Reduce:", simpleArraySumReduce([1, 2, 3, 4, 10, 11]));
