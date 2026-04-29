"use strict";
function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    // Usamos un loop 'for' clásico porque necesitamos el índice (i) 
    // para comparar la posición exacta de ambos arreglos
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++; // Punto para Alice
        }
        else if (a[i] < b[i]) {
            bobScore++; // Punto para Bob
        }
        // Si son iguales, no hacemos nada (el ejercicio dice no awarding points)
    }
    // Retornamos un arreglo con los dos puntajes finales
    return [aliceScore, bobScore];
}
// --- PRUEBAS (Input del ejercicio) ---
// Caso de ejemplo 1
const alice1 = [5, 6, 7];
const bob1 = [3, 6, 10];
console.log("Resultado 1 (Esperado [1, 1]):", compareTriplets(alice1, bob1));
// Caso de ejemplo 2
const alice2 = [17, 28, 30];
const bob2 = [99, 16, 8];
console.log("Resultado 2 (Esperado [2, 1]):", compareTriplets(alice2, bob2));
